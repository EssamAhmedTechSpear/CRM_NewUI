import { environment } from "src/environments/environment";

export class Strings {
    
    

 
    
    
  static SearchInLeadsTypesList = class {
    static list = [
      { id: '0', value: 'Leads' },
      { id: '1', value: 'Qualified Leads' },
      { id: '2', value: 'Disqualified Leads' },

    ]
  }
  static LeadSearchType = class {
    static list = [
      { id: '0', value: 'Fresh' },
      { id: '1', value: 'Pool' },
      { id: '2', value: 'NotCommunicated' },
      { id: '3', value: 'Unseen' },
    ]
  } 
  static URLs = class {
    static baseURL: string = environment.baseUrl;
    static basePaymentURL: string = environment.basePaymentUrl;
    static scenarioManagement: string = '/api/ScenarioManagement/execute';
    static paymentManagement: string = '/api/PaymentGatewayManagement';
    static scenarioManagment: string = '/api/ScenarioManagement/execute';
    static AttachmentUrl = +environment.assestsUrl + '/InventoryAttachments/';
  };

  static ScenarioUrl: string = Strings.URLs.baseURL + Strings.URLs.scenarioManagement;

  static typeNames = class {  
    static GetUserPermissionsByClientUserIdScenario = "GetUserPermissionsByClientUserIdScenario";
    static GetAllLeadsWithSearchFilterWithMultipleSelectScenario = "GetAllLeadsWithSearchFilterWithMultipleSelectScenario";
    static GetAllLeadSearchResultsScenario = "GetAllLeadSearchResultsScenario";
  }
    
  static StaticWords = class {
    static RedirectUrl: string = "RedirectUrl";
  };
  static statusIDs = class {
    static Active: string = 'fcaa8146-2531-40c1-92f1-3954588fe3fc';
    static Disabled: string = '1a96f3b0-3fb5-418e-b335-364cd79c08fd';
    static Inactive: string = '6e172b57-49f9-445a-8f2d-716679be2473';
    static Pending: string = '93bc68ba-b302-4b3c-8e7f-4c339c865e39';
    static SoldOut: string = 'be9e9c62-cd23-4423-8f0b-7c7f7040e5c9';
    static CommingSoon: string = '0457db35-dbdc-45bc-806e-ee7c68ba1571';
    static Prelaunch: string = 'b49cf45c-abf4-4711-953d-e4c02ed90831';
    static NewReleases: string = '54d58efa-93fb-462d-bdce-a655aaff8ff9';
    static needsToBeContacted: string = 'DD84A480-F891-4998-AF52-04329CB4E97B';
    static futureContact: string = 'B27E9E49-AD49-4E48-9AC5-0FAEDCFDD517';
    static unitBlocked: string = '6268F35D-32CC-4B8E-BE1A-109555DA2A6C';
    static clientNotAvailable: string = 'B172E967-FE80-4A18-8D20-3C12FDB37393';
    static meetingDone: string = 'EF3C3D43-D359-4E3F-BB7F-55AE3409A7CF';
    static anotherZoomMeeting: string = '84FAE347-C686-4CFE-8F0E-5B5F4F94518F';
    static needToBeContacted_reassigned: string =
      '946E58B8-73E8-4E11-B600-5D6FC7FF1056';
    static boughtOutside: string = '546F2593-FE55-4144-A8AC-5D8EC0381C92';
    static anotherMeeting: string = '467049B4-67F3-4A66-B18C-67ABE98C4DDD';
    static unitReserved: string = '2B454ECD-0D6E-411D-80CD-7095FF3CED06';
    static meetingCancelled: string = '4CEEB7F5-81FF-4B6C-AC51-711F64FCCB45';
    static zoomMeetingScheduled: string =
      '0337C966-80AD-4A30-ACD6-75DA272F1ABA';
    static presentation: string = '4D367134-0027-4280-91DC-865E278B1408';
    static meetingReschedule: string = '56FB3541-1D5A-4CFB-90B3-88184BF6E935';
    static lowBudget: string = 'A395F896-9F1E-4C4F-9311-9F1F34877908';
    static confirmMeeting: string = '6B1C92F9-5542-4BC4-9B91-A357C49DD498';
    static noAnswer: string = 'E8439870-F66B-485E-B8A0-BB55AB73E20D';
    static boughtOutsideCompound: string =
      'BDC10053-AF88-4765-88E2-C1B6B64E8DD3';
    static didNotFilloutTheForm: string =
      '37751466-E713-4D72-868D-CDFC88C858A9';
    static meetingScheduled: string = 'A01C06DE-DAC8-41ED-9085-D17D962840ED';
    static mobileSwithcedOff: string = 'FDC43E1B-3139-4AF4-B19E-D39095183A09';
    static invalidLocation: string = '05725829-4587-412A-A50B-DE383096E772';
    static congratsItsSale: string = 'D65316D7-316E-4367-BA65-F4328B68F4ED';
    static reassign: string = '790AB655-EB0E-433C-96EF-F46CCC67E228';
    static noAnswerFirstCall: string = '379C9CFA-2291-4CEB-9653-FDA280D61FC5';
    static UnitReserved: string = '2B454ECD-0D6E-411D-80CD-7095FF3CED06';
    static Won: string = 'B6CBCCE0-44C8-11EE-BE56-0242AC120002';
    static Lost: string = 'D1936C68-44C8-11EE-BE56-0242AC120002';
    static Contracted: string = '1d902870-44e4-11ee-be56-0242ac120002';
    static Collected: string = '22e7bc3e-44e4-11ee-be56-0242ac120002';
  };
    static Statuses = class {
        static find(arg0: (x: any) => boolean) {
            throw new Error("Method not implemented.");
        }
        static types = [
          {
            id:'54d58efa-93fb-462d-bdce-a655aaff8ff9',
            name: 'NewReleases',
          },
          {
            id: 'DD84A480-F891-4998-AF52-04329CB4E97B',
            name: 'needs to be contacted',
          }, //--
          { id: 'B27E9E49-AD49-4E48-9AC5-0FAEDCFDD517', name: 'future contact' }, //--
          { id: '6268F35D-32CC-4B8E-BE1A-109555DA2A6C', name: 'unit blocked' }, //
          { id: 'FCAA8146-2531-40C1-92F1-3954588FE3FC', name: 'Active' },
          { id: '1a96f3b0-3fb5-418e-b335-364cd79c08fd', name: 'disable' }, //
           //
          {
            id: 'B172E967-FE80-4A18-8D20-3C12FDB37393',
            name: 'client not available',
          }, //--
          { id: '93BC68BA-B302-4B3C-8E7F-4C339C865E39', name: 'Pending' },
          { id: 'EF3C3D43-D359-4E3F-BB7F-55AE3409A7CF', name: 'meeting done' },
          {
            id: '84FAE347-C686-4CFE-8F0E-5B5F4F94518F',
            name: 'another zoom meeting',
          },
          {
            id: '946E58B8-73E8-4E11-B600-5D6FC7FF1056',
            name: 'need to be contacted (reassigned)',
          },
          { id: '546F2593-FE55-4144-A8AC-5D8EC0381C92', name: 'bought outside' },
          { id: '467049B4-67F3-4A66-B18C-67ABE98C4DDD', name: 'another meeting' },
          { id: '2B454ECD-0D6E-411D-80CD-7095FF3CED06', name: 'unit reserved' },
          { id: '4CEEB7F5-81FF-4B6C-AC51-711F64FCCB45', name: 'meeting cancelled' },
          { id: '6E172B57-49F9-445A-8F2D-716679BE2473', name: 'Inactive' },
          {
            id: '0337C966-80AD-4A30-ACD6-75DA272F1ABA',
            name: 'zoom meeting scheduled',
          },
          { id: 'BE9E9C62-CD23-4423-8F0B-7C7F7040E5C9', name: 'Sold Out' },
          { id: '4D367134-0027-4280-91DC-865E278B1408', name: 'presentation' },
          {
            id: '56FB3541-1D5A-4CFB-90B3-88184BF6E935',
            name: 'meeting reschedule',
          },
          { id: 'A395F896-9F1E-4C4F-9311-9F1F34877908', name: 'low budget' },
          { id: '6B1C92F9-5542-4BC4-9B91-A357C49DD498', name: 'confirm meeting' },
          { id: 'E8439870-F66B-485E-B8A0-BB55AB73E20D', name: 'no answer' },
          {
            id: 'BDC10053-AF88-4765-88E2-C1B6B64E8DD3',
            name: 'bought outside compound',
          },
          {
            id: '37751466-E713-4D72-868D-CDFC88C858A9',
            name: "didn't fill out the form",
          },
          { id: 'A01C06DE-DAC8-41ED-9085-D17D962840ED', name: 'meeting scheduled' },
          {
            id: 'FDC43E1B-3139-4AF4-B19E-D39095183A09',
            name: 'mobile swithced off',
          },
          { id: '05725829-4587-412A-A50B-DE383096E772', name: 'invalid location' },
          { id: 'B49CF45C-ABF4-4711-953D-E4C02ED90831', name: 'Prelaunch' },
          { id: '0457DB35-DBDC-45BC-806E-EE7C68BA1571', name: 'Comming Soon' },
          {
            id: 'D65316D7-316E-4367-BA65-F4328B68F4ED',
            name: "congrats it's a sale",
          },
          { id: '790AB655-EB0E-433C-96EF-F46CCC67E228', name: 'reassign' },
          {
            id: '379C9CFA-2291-4CEB-9653-FDA280D61FC5',
            name: 'no answer first call',
          },
          { id: '1D902870-44E4-11EE-BE56-0242AC120002', name: 'contracted' },
          { id: '22e7bc3e-44e4-11ee-be56-0242ac120002', name: 'collected' },
          { id: 'b6cbcce0-44c8-11ee-be56-0242ac120002', name: 'won' },
          { id: 'D1936C68-44C8-11EE-BE56-0242AC120002', name: 'lost' },
        ];
      };
}