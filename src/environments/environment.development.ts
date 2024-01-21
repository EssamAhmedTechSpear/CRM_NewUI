 export const environment = {
 // production: false,
  baseUrl: "https://localhost:7115",
  basePaymentUrl: "http://localhost:5126",
  assestsUrl: "http://localhost:4444",
  inventoryAttachmentUrl: "http://localhost:4444/InventoryAttachments",
  production: false,
  callsNumber: +201283565197,
  mailTo: 'essam.ahmed@techspear.net',
  whatsappNumber: +201283565197,
  apiBaseURL: "https://localhost:7115",
  apiPaymentBaseURL: "http://localhost:5126",
  assetsURL: "http://localhost:4444",
  DomainURL: "https://localhost:4201",
  IdentityServerConfig: {
    authority: 'https://localhost:5031',
    redirectUrl: 'https://localhost:4201/sign-in',
    postLogoutRedirectUri: 'https://localhost:4201/sign-out',
    clientId: 'crm',
    scope:  'FullAccess openid profile',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
  },
  RegisterByAdmin : `https://localhost:5031/account/registerbyadmin`,
  GetUsersNotMbClients : `https://localhost:7091/api/odata/GetNonClientUsers`,
  ChangePassword : `https://localhost:5031/account/changepassword`,

  IdentityUrls:{
    RegisterByAdmin : `https://localhost:5031/account/registerbyadmin`,
    GetUsersNotMbClients : `https://localhost:7091/api/odata/GetNonClientUsers`,
    ChangePassword : `https://localhost:5031/account/changepassword`
 }
};

