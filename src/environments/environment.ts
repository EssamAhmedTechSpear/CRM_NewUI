
export const environment = {
  //  production: true,
  baseUrl: "https://mainwebapiv1.mbstate.com",
  basePaymentUrl: "https://pyg.mbstate.com",
  assestsUrl: "https://assetsources.mbstate.com",
  inventoryAttachmentUrl: "https://assetsources.mbstate.com/InventoryAttachments",
  RegisterByAdmin : `https://idguardian.mbstate.com/account/registerbyadmin`,
  GetUsersNotMbClients : `https://oidguardian.mbstate.com/api/odata/GetNonClientUsers`,
  ChangePassword : `https://idguardian.mbstate.com/account/changepassword`,
  production: false,
  callsNumber: +201283565197,
  mailTo: 'essam.ahmed@techspear.net',
  whatsappNumber: +201283565197,
  DomainURL:"https://mbcrm.mbstate.com",
  apiBaseURL: "https://mainwebapiv1.mbstate.com",
  apiPaymentBaseURL: "https://pyg.mbstate.com",
  assetsURL: "https://assetsources.mbstate.com",
  IdentityServerConfig: {
    authority: 'https://idguardian.mbstate.com',
    redirectUrl: 'https://mbcrm.mbstate.com/sign-in',
    postLogoutRedirectUri: 'https://mbcrm.mbstate.com/sign-out',
    clientId: 'crm',
    scope: 'FullAccess openid profile',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
  },
  IdentityUrls:{
    RegisterByAdmin : `https://idguardian.mbstate.com/account/registerbyadmin`,
    GetUsersNotMbClients : `https://oidguardian.mbstate.com/api/odata/GetNonClientUsers`,
    ChangePassword : `https://idguardian.mbstate.com/account/changepassword`
 }
};
