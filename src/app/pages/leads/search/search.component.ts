import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { colDef } from '@bhplugin/ng-datatable';
import { Store } from '@ngrx/store';
import { ModalComponent } from 'angular-custom-modal';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { NgScrollbar } from 'ngx-scrollbar';
import { CustomDropdownsValuesDTO } from 'src/app/Models/DTOs/CustomDropdownsValuesDTO';
import { UserEntityPermissions } from 'src/app/Models/DTOs/PermissionDTOs/UserEntityPermissions';
import { SearchInLeadsTypesDTO, SearchLeadsOrderBy } from 'src/app/Models/DTOs/SPADTOs/LeadSearchDTO';
import { LeadSearchResultDTO } from 'src/app/Models/DTOs/SPADTOs/LeadSearchResultDTO';
import { LeadSearchResultWithMultipleSelectDTO } from 'src/app/Models/DTOs/SPADTOs/LeadSearchResultWithMultipleSelectDTO';
import { LeadSearchResultsDTO } from 'src/app/Models/DTOs/SPADTOs/LeadSearchResultsDTO';
import { ScenarioBaseDTO } from 'src/app/Models/ScenarioBaseDTO.model';
import { ScenarioResponseDTO } from 'src/app/Models/ScenarioResponseDTO';
import { Strings } from 'src/app/service/Strings';
import { Utilities } from 'src/app/service/Utilities.service';
import { CRMManagementService } from 'src/app/service/crm.management.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('toggleAnimation', [
        transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('150ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
        transition(':leave', [animate('150ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
    ]),
],
})
export class SearchComponent  {
options = ['Orange', 'White', 'Purple'];
input4 : string  | undefined;
basic: any= null;
store: any;
isShowSearchMenu = false;
searchtext = '';
isloading = false;
userEntityPermissions: UserEntityPermissions = new UserEntityPermissions();
LeadSearchResultsList: LeadSearchResultDTO[] = [];
params = {
    current_page: 1,
    pagesize: 20,
    sort_column: 'createdOnDate',
    search: ''
  };
total_rows: number = 0;
rows: LeadSearchResultDTO[] = [];
qualifyAndDisQualifybtn = false;
showImportModal: boolean;
orderBy:SearchLeadsOrderBy=SearchLeadsOrderBy.noOrder;
SearchInLeadsTypesList: any[] = Strings.SearchInLeadsTypesList.list;
isCurrentUserAdmin:boolean=false;
LeadSearchResults: LeadSearchResultsDTO = new LeadSearchResultsDTO();
LeadTypesList: Array<any> = [];
LeadSourcesList: Array<CustomDropdownsValuesDTO> = [];
LeadSourcesListForDropDown: Array<CustomDropdownsValuesDTO> = [];
LeadSourcesListForDropDownImportMode: Array<CustomDropdownsValuesDTO> = [];
ContactsList: Array<any> = [];
governmentList: Array<any> = [];
areaList: Array<any> = [];
usersList: Array<any> = [];
projectsList: Array<any> = [];
projectsListForDropDown: Array<CustomDropdownsValuesDTO> = [];
developerList: Array<any> = [];
teamList: Array<any> = [];
isSearchInLeads:boolean=true;
isSelectedManyLeadTypes:boolean=false;
isSelectedManyGovernments: boolean;
isSelectedManyDevelopers: boolean;
StatusList: any[] = Strings.Statuses.types;
LeadSearchTypeList: any[] = Strings.LeadSearchType.list




  constructor(public storeData: Store<any>, private fb: FormBuilder, private _router: Router, private crmManagementService: CRMManagementService, private utilities: Utilities) { 
    this.initStore();
    this.isloading = true;
    setTimeout(() => {
        this.isloading = false;
    }, 3000);
}

async initStore() {
    this.storeData
        .select((d) => d.index)
        .subscribe((d) => {
            this.store = d;
            this.basic = {
                defaultDate: '',
                dateFormat: 'Y-m-d',
                position: this.store.rtlClass === 'rtl' ? 'auto right' : 'auto left',
            };
            this.utilities.currentUserPermissions$.subscribe((res) => {
                if (res != null) {
                  this.userEntityPermissions = res;
                  this.isCurrentUserAdmin= this.utilities.IsCurrentUserAdmin(res);
                  this.GetAllLeadSearchResults();
                }
              });
              
        });
}
GetAllLeadSearchResults() {
    debugger
    let scenario: ScenarioBaseDTO = new ScenarioBaseDTO();
    scenario.TypeName = Strings.typeNames.GetAllLeadSearchResultsScenario;
    this.crmManagementService.post(Strings.ScenarioUrl, scenario).subscribe(async (response) => {
      let GetAllLeadSearchResultsResponse: ScenarioResponseDTO = new ScenarioResponseDTO();
      GetAllLeadSearchResultsResponse = response as ScenarioResponseDTO;
      this.LeadSearchResults = GetAllLeadSearchResultsResponse.result as LeadSearchResultsDTO;

      this.LeadSourcesList = this.LeadSearchResults?.leadSources;
      this.LeadSourcesListForDropDown = this.LeadSourcesList;
      this.LeadSourcesListForDropDownImportMode = this.LeadSourcesList;
      this.LeadTypesList = this.LeadSearchResults?.leadTypes;

      this.ContactsList = this.LeadSearchResults?.contacts.filter(c => c.value != null && c.value?.trim().length != 0);
      this.areaList = this.LeadSearchResults?.areas;
      this.governmentList = this.LeadSearchResults?.governments;
      this.projectsList = this.LeadSearchResults?.projects;
      this.projectsListForDropDown = this.projectsList;
      this.developerList = this.LeadSearchResults?.developers;
      this.usersList = this.LeadSearchResults?.users;
      this.teamList = this.LeadSearchResults?.teams;
       
      //--------------------------- UserList Value Only Contains Names Full Email---------------------------
      this.usersList.forEach(user => {
        user.value = user.value.split('@')[0];
      });
      let organic = this.LeadTypesList.find(x => x.name == 'Organic');
      if (organic != null)
        this.LeadTypeId?.setValue([organic]);

    this.SubmitLeadSearchForm();
    });
    
  }
  ResetLeadSearchForm() {
    this.LeadSearchForm.reset();
    this.SearchInLeadsTypes.setValue(this.SearchInLeadsTypesList.filter(x => x.id === '0'))
  }
LeadSearchForm: FormGroup = new FormGroup({
    LeadSourceId: new FormControl(''),
    LeadTypeId: new FormControl(''),
    AssignedToTeamId: new FormControl(''),
    AssignedToId: new FormControl(''),
    AssignedById: new FormControl(''),
    CreatedById: new FormControl(''),
    ProjectId: new FormControl(''),
    DeveloperId: new FormControl(''),
    AreaId: new FormControl(''),
    GovernmentId: new FormControl(''),
    StatusId: new FormControl(''),
    CreatedOnDateFrom: new FormControl(''),
    CreatedOnDateTo: new FormControl(''),
    CampaignName: new FormControl(''),
    ContactPhoneNumber: new FormControl(''),
    SearchInLeadsTypes: new FormControl(''),
    LeadSearchType: new FormControl(''),
    OrderById: new FormControl(0),
  }, {
    validators: this.dateRangeValidator
  });

  AssignLeadToUserForm: FormGroup = new FormGroup({
    assignToUser: new FormControl('', [Validators.required]),
  });
  AssignLeadToTeamForm: FormGroup = new FormGroup({
    assignToTeam: new FormControl('', [Validators.required]),
  });
  ImportBulkForm: FormGroup = new FormGroup({
    leadType: new FormControl('', [Validators.required]),
    leadSource: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    government: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    excelFile: new FormControl('', [Validators.required]),
  });

  CancelImportFunction() {
    this.showImportModal = false;
    this.ImportBulkForm.reset();
  }

  dateRangeValidator(group: FormGroup): { [key: string]: boolean } | null {
    const from = group.get('CreatedOnDateFrom').value;
    const to = group.get('CreatedOnDateTo').value;
    if (from && to && from > to) {
      return { 'dateRangeInvalid': true };
    }

    return null;
  }

  SubmitLeadSearchForm() {
    let getAllLeadsWithSearchFilterScenario: ScenarioBaseDTO = new ScenarioBaseDTO();
    getAllLeadsWithSearchFilterScenario.TypeName = Strings.typeNames.GetAllLeadsWithSearchFilterWithMultipleSelectScenario;
    getAllLeadsWithSearchFilterScenario.Body = this.PrepareSearchDTO(this.params.current_page, this.params.pagesize);
    this.crmManagementService.post(Strings.ScenarioUrl, getAllLeadsWithSearchFilterScenario).subscribe(res => {
      let getAllLeadsWithSearchFilterResponse = res as ScenarioResponseDTO;
      if (getAllLeadsWithSearchFilterResponse.httpCode == 200 && getAllLeadsWithSearchFilterResponse.result != null) {
        this.LeadSearchResultsList = getAllLeadsWithSearchFilterResponse.result as LeadSearchResultDTO[];
        this.LeadSearchResultsList.forEach(lead => {
         lead.createdOnDate = this.utilities.FormatDateTime(new Date(lead.createdOn));
        });
        this.rows=this.LeadSearchResultsList;
        this.total_rows = getAllLeadsWithSearchFilterResponse.totalCount;
        this.qualifyAndDisQualifybtn =true;
      }
    });
    
}
PrepareSearchDTO(page: number, perPage: number): LeadSearchResultWithMultipleSelectDTO {
    let searchDTO = new LeadSearchResultWithMultipleSelectDTO();
    searchDTO.leadSourceIds = this.LeadSourceId?.value != "" ? this.LeadSourceId?.value?.map(t=>t.id) : null;
    searchDTO.leadTypeIds = this.LeadTypeId?.value != "" ? this.LeadTypeId?.value?.map(t=>t.id)  : null
    searchDTO.assignedToTeamIds = this.AssignedToTeamId?.value!= "" ? this.AssignedToTeamId?.value?.map(t=>t.id) : null;
    searchDTO.assignedToIds = this.AssignedToId?.value != "" ? this.AssignedToId?.value?.map(t=>t.id) : null;
    searchDTO.assignedByIds = this.AssignedById?.value != "" ? this.AssignedById?.value?.map(t=>t.id): null;
    searchDTO.createdByIds = this.CreatedById?.value != "" ? this.CreatedById?.value?.map(t=>t.id): null;
    searchDTO.projectIds = this.ProjectId?.value != "" ? this.ProjectId?.value?.map(t=>t.id): null;
    searchDTO.developerIds = this.DeveloperId?.value != "" ? this.DeveloperId?.value?.map(t=>t.id) : null;
    searchDTO.areaIds = this.AreaId?.value != "" ? this.AreaId?.value?.map(t=>t.id) : null;
    searchDTO.governmentIds = this.GovernmentId?.value != "" ? this.GovernmentId?.value?.map(t=>t.id) : null;
    searchDTO.statusIds = this.StatusId?.value != "" ? this.StatusId?.value?.map(t=>t.id) : null;
    searchDTO.createdOnDateFrom = this.CreatedOnDateFrom?.value;
    searchDTO.createdOnDateTo = this.CreatedOnDateTo?.value;
    searchDTO.campaignName = this.CampaignName?.value;
    searchDTO.contactPhoneNumber = this.ContactPhoneNumber?.value;
    searchDTO.orderBy = this.OrderById?.value != "" ? this.OrderById?.value?.[0]?.id : this.orderBy;
    searchDTO.pageNumber = page;
    searchDTO.pageSize = perPage;
    searchDTO.searchInLeadsTypes = this.SearchInLeadsTypes?.value?.[0]?.id != '' ? this.SearchInLeadsTypes?.value?.[0]?.id : null;
    searchDTO.leadSearchTypes = this.LeadSearchType?.value != '' ? this.LeadSearchType?.value?.map(t=>t.id): null;
    if (searchDTO.searchInLeadsTypes == null) {
      this.SearchInLeadsTypes.setValue(this.SearchInLeadsTypesList.filter(x => x.id === '0'))
    }
    return searchDTO;
  }

onDelete(){
    this.utilities.showConfirmDeleteMessage('lead').then((result) => {
        if (result.isConfirmed) {
            this.utilities.showMessage('Deleted successfully',true);
        }
        else{
            this.utilities.showMessage('Delete Canceled',true);
        }
    });
    
}
updateColumn(col: colDef) {
    col.hide = !col.hide;
    this.cols = [...this.cols]; // Create a new reference of the array
  }
  cols: Array<colDef> = [
    { field: 'contactName', title: 'Contact', hide: false, sort: false },
    { field: 'contactPhoneNumber', title: 'Phone', hide: false, sort: false },
    { field: 'campaignName', title: 'Compaign', hide: false },
    { field: 'leadTypeName', title: 'Type', hide: false, sort: false },
    { field: 'leadSourceName', title: 'Source', hide: false, sort: false },
    { field: 'createdOnDate', title: 'Created On', type: 'date', hide: false },
    { field: 'createdByUserName', title: 'Marketer', hide: false, sort: false },
    { field: 'assignedToUserName', title: 'Sales', hide: false, sort: false },
    { field: 'assignedToTeamName', title: 'Sales Team', hide: false, sort: false },
    { field: 'statusName', title: 'Status', hide: false, sort: false },
    { field: 'report', title: 'Report', hide: false },
  ];

  rowClick(data:any){
    var leadType = this.SearchInLeadsTypes?.value?.[0]?.id
    if (leadType == SearchInLeadsTypesDTO.Leads) {
      this._router.navigate(['/edit-lead', data.id])
    }
    else if (leadType == SearchInLeadsTypesDTO.DisqualifiedLeads) {
      this._router.navigate(['/edit-disqualified-leads', data.id])
    }
    else if (leadType == SearchInLeadsTypesDTO.QualifiedLeads) {
      this._router.navigate(['/edit-qualified-leads', data.id])
    }
  }

get assignToUser() { return this.AssignLeadToUserForm?.get('assignToUser'); }
get assignToTeam() { return this.AssignLeadToTeamForm?.get('assignToTeam'); }
get LeadSourceId() { return this.LeadSearchForm?.get('LeadSourceId'); }
get LeadTypeId() { return this.LeadSearchForm?.get('LeadTypeId'); }
get AssignedToTeamId() { return this.LeadSearchForm?.get('AssignedToTeamId'); }
get AssignedToId() { return this.LeadSearchForm?.get('AssignedToId'); }
get AssignedById() { return this.LeadSearchForm?.get('AssignedById'); }
get CreatedById() { return this.LeadSearchForm?.get('CreatedById'); }
get ProjectId() { return this.LeadSearchForm?.get('ProjectId'); }
get DeveloperId() { return this.LeadSearchForm?.get('DeveloperId'); }
get AreaId() { return this.LeadSearchForm?.get('AreaId'); }
get GovernmentId() { return this.LeadSearchForm?.get('GovernmentId'); }
get StatusId() { return this.LeadSearchForm?.get('StatusId'); }
get CreatedOnDateFrom() { return this.LeadSearchForm?.get('CreatedOnDateFrom'); }
get CreatedOnDateTo() { return this.LeadSearchForm?.get('CreatedOnDateTo'); }
get CampaignName() { return this.LeadSearchForm?.get('CampaignName'); }
get ContactPhoneNumber() { return this.LeadSearchForm?.get('ContactPhoneNumber'); }
get OrderById() { return this.LeadSearchForm?.get('OrderById'); }
get SearchInLeadsTypes() { return this.LeadSearchForm?.get('SearchInLeadsTypes'); }
get LeadSearchType() { return this.LeadSearchForm?.get('LeadSearchType'); }


//excel bulk import
get leadType() { return this.ImportBulkForm?.controls['leadType']; }
get leadSource() { return this.ImportBulkForm?.controls['leadSource']; }
get status() { return this.ImportBulkForm?.controls['status']; }
get country() { return this.ImportBulkForm?.controls['country']; }
get government() { return this.ImportBulkForm?.controls['government']; }
get area() { return this.ImportBulkForm?.controls['area']; }


OnSelectSearchIn(event: any) { 
  
    if(event.id==SearchInLeadsTypesDTO.Leads){
      this.isSearchInLeads=true;
     }
     else{
      this.isSearchInLeads=false;
     }
     this.qualifyAndDisQualifybtn =false;
  }
  onDeSelectSearchIn() {
    this.isSearchInLeads = false;
  }
  
  onSelectLeadTypes(event: any) {
     
    this.LeadSourcesListForDropDown = this.LeadSourcesList.filter(x => x.extraValue == event.id);
    var count = this.LeadTypeId?.value?.map(t=>t.id)?.length;
    if(count>1){
      this.isSelectedManyLeadTypes=true;
    }
    else{
      this.isSelectedManyLeadTypes=false;
    }
  }
  onDeSelectLeadTypes(event: any) {
    this.LeadSourcesListForDropDown = this.LeadSourcesList;
    var count = this.LeadTypeId?.value?.map(t=>t.id)?.length;
    if(count>1){
      this.isSelectedManyLeadTypes=true;
    }
    else{
      this.isSelectedManyLeadTypes=false;
    }
  }
  onSelectLeadSources(event: any) { }
  onDeSelectLeadSources(event: any) { }

  onSelectContact(event: any) { }
  onDeSelectContact(event: any) { }

  onSelectGovernment(event: any) { 
     

    var count = this.GovernmentId?.value?.map(t=>t.id)?.length;
    if(count>1){
      this.isSelectedManyGovernments=true;
    }
    else{
      this.isSelectedManyGovernments=false;
    }
  }
  onDeSelectGovernment(event: any) { 
     
    var count = this.GovernmentId?.value?.map(t=>t.id)?.length;
    if(count>1){
      this.isSelectedManyGovernments=true;
    }
    else{
      this.isSelectedManyGovernments=false;
    }
  }

  onSelectAssignedTo(event: any) { }
  onDeSelectAssignedTo(event: any) { }

  onSelectProject(event: any) { 

  }
  onDeSelectProject(event: any) { }

  onSelectDeveloper(event: any) {
    this.projectsListForDropDown = this.projectsList.filter(x => x.extraValue == event.id);
    var count = this.DeveloperId?.value?.map(t=>t.id)?.length;
    if(count>1){
      this.isSelectedManyDevelopers=true;
    }
    else{
      this.isSelectedManyDevelopers=false;
    }
  }
  onDeSelectDeveloper(event: any) {
    this.projectsListForDropDown = this.projectsList;
    var count = this.DeveloperId?.value?.map(t=>t.id)?.length;
    if(count>1){
      this.isSelectedManyDevelopers=true;
    }
    else{
      this.isSelectedManyDevelopers=false;
    }

  }
  
  onSelectCreatedBy(event: any) { }
  onDeSelectCreatedBy(event: any) { }

  onSelectAssignedToTeam(event: any) { }
  onDeSelectAssignedToTeam(event: any) { }

  onSelectOrderBy(event: any) { }
  onDeSelectOrderBy(event: any) { }

  onSelectArea(event: any) { }
  onDeSelectArea(item: any) { }

  onSelectStatus(event: any) { }
  onDeSelectStatus(item: any) { }
}
