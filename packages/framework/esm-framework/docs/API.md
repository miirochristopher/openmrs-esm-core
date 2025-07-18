[Back to README.md](../README.md)

# @openmrs/esm-framework

## Table of contents

### API Functions

- [clearCurrentUser](API.md#clearcurrentuser)
- [createAttachment](API.md#createattachment)
- [deleteAttachmentPermanently](API.md#deleteattachmentpermanently)
- [fetchCurrentPatient](API.md#fetchcurrentpatient)
- [getAttachmentByUuid](API.md#getattachmentbyuuid)
- [getAttachments](API.md#getattachments)
- [getCurrentUser](API.md#getcurrentuser)
- [getLocations](API.md#getlocations)
- [getLoggedInUser](API.md#getloggedinuser)
- [getSessionLocation](API.md#getsessionlocation)
- [getSessionStore](API.md#getsessionstore)
- [getVisitStore](API.md#getvisitstore)
- [getVisitTypes](API.md#getvisittypes)
- [getVisitsForPatient](API.md#getvisitsforpatient)
- [makeUrl](API.md#makeurl)
- [openmrsFetch](API.md#openmrsfetch)
- [openmrsObservableFetch](API.md#openmrsobservablefetch)
- [refetchCurrentUser](API.md#refetchcurrentuser)
- [saveVisit](API.md#savevisit)
- [setCurrentVisit](API.md#setcurrentvisit)
- [setSessionLocation](API.md#setsessionlocation)
- [setUserLanguage](API.md#setuserlanguage)
- [setUserProperties](API.md#setuserproperties)
- [toLocationObject](API.md#tolocationobject)
- [toVisitTypeObject](API.md#tovisittypeobject)
- [updateVisit](API.md#updatevisit)
- [useAttachments](API.md#useattachments)
- [useEmrConfiguration](API.md#useemrconfiguration)
- [useLocations](API.md#uselocations)
- [usePatient](API.md#usepatient)
- [usePrimaryIdentifierCode](API.md#useprimaryidentifiercode)
- [useSession](API.md#usesession)
- [useVisit](API.md#usevisit)
- [useVisitTypes](API.md#usevisittypes)
- [userHasAccess](API.md#userhasaccess)

### Breadcrumb Functions

- [filterBreadcrumbs](API.md#filterbreadcrumbs)
- [getBreadcrumbs](API.md#getbreadcrumbs)
- [getBreadcrumbsFor](API.md#getbreadcrumbsfor)
- [registerBreadcrumb](API.md#registerbreadcrumb)
- [registerBreadcrumbs](API.md#registerbreadcrumbs)

### Config Functions

- [defineConfigSchema](API.md#defineconfigschema)
- [defineExtensionConfigSchema](API.md#defineextensionconfigschema)
- [getConfig](API.md#getconfig)
- [provide](API.md#provide)
- [useConfig](API.md#useconfig)

### Config Validation Functions

- [inRange](API.md#inrange)
- [isUrl](API.md#isurl)
- [isUrlWithTemplateParameters](API.md#isurlwithtemplateparameters)
- [oneOf](API.md#oneof)
- [validator](API.md#validator)

### Context Functions

- [OpenmrsAppContext](API.md#openmrsappcontext)
- [getContext](API.md#getcontext)
- [registerContext](API.md#registercontext)
- [subscribeToContext](API.md#subscribetocontext)
- [unregisterContext](API.md#unregistercontext)
- [updateContext](API.md#updatecontext)
- [useAppContext](API.md#useappcontext)
- [useDefineAppContext](API.md#usedefineappcontext)

### Date and Time Functions

- [convertToLocaleCalendar](API.md#converttolocalecalendar)
- [formatDate](API.md#formatdate)
- [formatDatetime](API.md#formatdatetime)
- [formatPartialDate](API.md#formatpartialdate)
- [formatTime](API.md#formattime)
- [getDefaultCalendar](API.md#getdefaultcalendar)
- [isOmrsDateStrict](API.md#isomrsdatestrict)
- [isOmrsDateToday](API.md#isomrsdatetoday)
- [parseDate](API.md#parsedate)
- [registerDefaultCalendar](API.md#registerdefaultcalendar)
- [toDateObjectStrict](API.md#todateobjectstrict)
- [toOmrsIsoString](API.md#toomrsisostring)

### Dynamic Loading Functions

- [importDynamic](API.md#importdynamic)

### Extension Functions

- [ExtensionSlot](API.md#extensionslot)
- [attach](API.md#attach)
- [detach](API.md#detach)
- [detachAll](API.md#detachall)
- [getAssignedExtensions](API.md#getassignedextensions)
- [getExtensionNameFromId](API.md#getextensionnamefromid)
- [getExtensionStore](API.md#getextensionstore)
- [renderExtension](API.md#renderextension)
- [useAssignedExtensionIds](API.md#useassignedextensionids)
- [useAssignedExtensions](API.md#useassignedextensions)
- [useConnectedExtensions](API.md#useconnectedextensions)
- [useExtensionSlotMeta](API.md#useextensionslotmeta)
- [useExtensionSlotStore](API.md#useextensionslotstore)
- [useExtensionStore](API.md#useextensionstore)
- [useRenderableExtensions](API.md#userenderableextensions)

### Feature Flags Functions

- [getFeatureFlag](API.md#getfeatureflag)
- [registerFeatureFlag](API.md#registerfeatureflag)
- [useFeatureFlag](API.md#usefeatureflag)

### Framework Functions

- [getAsyncExtensionLifecycle](API.md#getasyncextensionlifecycle)
- [getAsyncLifecycle](API.md#getasynclifecycle)
- [getLifecycle](API.md#getlifecycle)
- [getSyncLifecycle](API.md#getsynclifecycle)

### Navigation Functions

- [ConfigurableLink](API.md#configurablelink)
- [getHistory](API.md#gethistory)
- [goBackInHistory](API.md#gobackinhistory)
- [interpolateString](API.md#interpolatestring)
- [interpolateUrl](API.md#interpolateurl)
- [navigate](API.md#navigate)

### Offline Functions

- [beginEditSynchronizationItem](API.md#begineditsynchronizationitem)
- [canBeginEditSynchronizationItemsOfType](API.md#canbegineditsynchronizationitemsoftype)
- [deleteSynchronizationItem](API.md#deletesynchronizationitem)
- [generateOfflineUuid](API.md#generateofflineuuid)
- [getCurrentOfflineMode](API.md#getcurrentofflinemode)
- [getDynamicOfflineDataEntries](API.md#getdynamicofflinedataentries)
- [getDynamicOfflineDataEntriesFor](API.md#getdynamicofflinedataentriesfor)
- [getDynamicOfflineDataHandlers](API.md#getdynamicofflinedatahandlers)
- [getFullSynchronizationItems](API.md#getfullsynchronizationitems)
- [getFullSynchronizationItemsFor](API.md#getfullsynchronizationitemsfor)
- [getOfflinePatientDataStore](API.md#getofflinepatientdatastore)
- [getSynchronizationItem](API.md#getsynchronizationitem)
- [getSynchronizationItems](API.md#getsynchronizationitems)
- [isOfflineUuid](API.md#isofflineuuid)
- [messageOmrsServiceWorker](API.md#messageomrsserviceworker)
- [putDynamicOfflineData](API.md#putdynamicofflinedata)
- [putDynamicOfflineDataFor](API.md#putdynamicofflinedatafor)
- [queueSynchronizationItem](API.md#queuesynchronizationitem)
- [registerOfflinePatientHandler](API.md#registerofflinepatienthandler)
- [removeDynamicOfflineData](API.md#removedynamicofflinedata)
- [removeDynamicOfflineDataFor](API.md#removedynamicofflinedatafor)
- [setupDynamicOfflineDataHandler](API.md#setupdynamicofflinedatahandler)
- [setupOfflineSync](API.md#setupofflinesync)
- [subscribeConnectivity](API.md#subscribeconnectivity)
- [subscribeConnectivityChanged](API.md#subscribeconnectivitychanged)
- [subscribePrecacheStaticDependencies](API.md#subscribeprecachestaticdependencies)
- [syncAllDynamicOfflineData](API.md#syncalldynamicofflinedata)
- [syncDynamicOfflineData](API.md#syncdynamicofflinedata)
- [syncOfflinePatientData](API.md#syncofflinepatientdata)
- [useConnectivity](API.md#useconnectivity)

### Other Functions

- [DashboardExtension](API.md#dashboardextension)
- [WorkspaceContainer](API.md#workspacecontainer)
- [age](API.md#age)
- [compile](API.md#compile)
- [createErrorHandler](API.md#createerrorhandler)
- [dispatchNotificationShown](API.md#dispatchnotificationshown)
- [dispatchPrecacheStaticDependencies](API.md#dispatchprecachestaticdependencies)
- [evaluate](API.md#evaluate)
- [evaluateAsBoolean](API.md#evaluateasboolean)
- [evaluateAsBooleanAsync](API.md#evaluateasbooleanasync)
- [evaluateAsNumber](API.md#evaluateasnumber)
- [evaluateAsNumberAsync](API.md#evaluateasnumberasync)
- [evaluateAsType](API.md#evaluateastype)
- [evaluateAsTypeAsync](API.md#evaluateastypeasync)
- [evaluateAsync](API.md#evaluateasync)
- [extractVariableNames](API.md#extractvariablenames)
- [getLocale](API.md#getlocale)
- [isDevEnabled](API.md#isdevenabled)
- [isOnline](API.md#isonline)
- [isVersionSatisfied](API.md#isversionsatisfied)
- [reportError](API.md#reporterror)
- [setLeftNav](API.md#setleftnav)
- [unsetLeftNav](API.md#unsetleftnav)
- [useFhirFetchAll](API.md#usefhirfetchall)
- [useFhirInfinite](API.md#usefhirinfinite)
- [useLeftNav](API.md#useleftnav)
- [useLeftNavStore](API.md#useleftnavstore)
- [useVisitContextStore](API.md#usevisitcontextstore)

### Store Functions

- [createGlobalStore](API.md#createglobalstore)
- [createUseStore](API.md#createusestore)
- [getGlobalStore](API.md#getglobalstore)
- [subscribeTo](API.md#subscribeto)
- [useStore](API.md#usestore)
- [useStoreWithActions](API.md#usestorewithactions)

### Translation Functions

- [getCoreTranslation](API.md#getcoretranslation)
- [translateFrom](API.md#translatefrom)

### UI Functions

- [CustomOverflowMenu](API.md#customoverflowmenu)
- [PatientBannerActionsMenu](API.md#patientbanneractionsmenu)
- [PatientBannerContactDetails](API.md#patientbannercontactdetails)
- [PatientBannerPatientIdentifiers](API.md#patientbannerpatientidentifiers)
- [PatientBannerPatientInfo](API.md#patientbannerpatientinfo)
- [PatientBannerToggleContactDetailsButton](API.md#patientbannertogglecontactdetailsbutton)
- [PatientPhoto](API.md#patientphoto)
- [getFhirServerPaginationHandlers](API.md#getfhirserverpaginationhandlers)
- [isDesktop](API.md#isdesktop)
- [showActionableNotification](API.md#showactionablenotification)
- [showModal](API.md#showmodal)
- [showNotification](API.md#shownotification)
- [showSnackbar](API.md#showsnackbar)
- [showToast](API.md#showtoast)
- [subscribeActionableNotificationShown](API.md#subscribeactionablenotificationshown)
- [subscribeNotificationShown](API.md#subscribenotificationshown)
- [subscribeSnackbarShown](API.md#subscribesnackbarshown)
- [subscribeToastShown](API.md#subscribetoastshown)
- [useBodyScrollLock](API.md#usebodyscrolllock)
- [useFhirPagination](API.md#usefhirpagination)
- [useLayoutType](API.md#uselayouttype)
- [useOnClickOutside](API.md#useonclickoutside)
- [useOnVisible](API.md#useonvisible)
- [useOpenmrsFetchAll](API.md#useopenmrsfetchall)
- [useOpenmrsInfinite](API.md#useopenmrsinfinite)
- [useOpenmrsPagination](API.md#useopenmrspagination)
- [usePagination](API.md#usepagination)
- [usePatientPhoto](API.md#usepatientphoto)

### Utility Functions

- [canAccessStorage](API.md#canaccessstorage)
- [displayName](API.md#displayname)
- [formatPatientName](API.md#formatpatientname)
- [formattedName](API.md#formattedname)
- [getDefaultsFromConfigSchema](API.md#getdefaultsfromconfigschema)
- [getPatientName](API.md#getpatientname)
- [retry](API.md#retry)
- [selectPreferredName](API.md#selectpreferredname)
- [shallowEqual](API.md#shallowequal)
- [useAbortController](API.md#useabortcontroller)
- [useDebounce](API.md#usedebounce)
- [useOpenmrsSWR](API.md#useopenmrsswr)

### Workspace Functions

- [closeWorkspace](API.md#closeworkspace)
- [launchWorkspace](API.md#launchworkspace)
- [launchWorkspaceGroup](API.md#launchworkspacegroup)
- [navigateAndLaunchWorkspace](API.md#navigateandlaunchworkspace)
- [useWorkspaces](API.md#useworkspaces)

## API Type Aliases

### CurrentPatient

Ƭ **CurrentPatient**: `fhir.Patient` \| `FetchResponse`<`fhir.Patient`\>

#### Defined in

[packages/framework/esm-emr-api/src/current-patient.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/current-patient.ts#L5)

___

### LoadedSessionStore

Ƭ **LoadedSessionStore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loaded` | ``true`` |
| `session` | [`Session`](interfaces/Session.md) |

#### Defined in

[packages/framework/esm-api/src/current-user.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L11)

___

### NullablePatient

Ƭ **NullablePatient**: `fhir.Patient` \| ``null``

#### Defined in

[packages/framework/esm-react-utils/src/usePatient.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/usePatient.ts#L6)

___

### PatientUuid

Ƭ **PatientUuid**: `string` \| ``null``

#### Defined in

[packages/framework/esm-emr-api/src/current-patient.ts:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/current-patient.ts#L19)

___

### SessionStore

Ƭ **SessionStore**: [`LoadedSessionStore`](API.md#loadedsessionstore) \| [`UnloadedSessionStore`](API.md#unloadedsessionstore)

#### Defined in

[packages/framework/esm-api/src/current-user.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L9)

___

### UnloadedSessionStore

Ƭ **UnloadedSessionStore**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `loaded` | ``false`` |
| `session` | ``null`` |

#### Defined in

[packages/framework/esm-api/src/current-user.ts:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L16)

___

## Context Type Aliases

### ContextCallback

Ƭ **ContextCallback**<`T`\>: (`state`: `Readonly`<`T`\> \| ``null`` \| `undefined`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = {} |

#### Type declaration

▸ (`state`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Readonly`<`T`\> \| ``null`` \| `undefined` |

##### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:89](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L89)

___

## Date and Time Type Aliases

### DateInput

Ƭ **DateInput**: `string` \| `number` \| `Date`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:6

___

### FormatDateMode

Ƭ **FormatDateMode**: ``"standard"`` \| ``"wide"``

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:49

___

### FormatDateOptions

Ƭ **FormatDateOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `calendar?` | `string` | The calendar to use when formatting this date. |
| `day` | `boolean` | Whether to include the day number |
| `locale?` | `string` | The locale to use when formatting this date |
| `mode` | [`FormatDateMode`](API.md#formatdatemode) | - `standard`: "03 Feb 2022" - `wide`:     "03 — Feb — 2022" |
| `month` | `boolean` | Whether to include the month number |
| `noToday` | `boolean` | Disables the special handling of dates that are today. If false (the default), then dates that are today will be formatted as "Today" in the locale language. If true, then dates that are today will be formatted the same as all other dates. |
| `numberingSystem?` | `string` | The unicode numbering system to use |
| `time` | `boolean` \| ``"for today"`` | Whether the time should be included in the output always (`true`), never (`false`), or only when the input date is today (`for today`). |
| `year` | `boolean` | Whether to include the year |

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:50

___

## Extension Type Aliases

### ExtensionProps

Ƭ **ExtensionProps**: `React.HTMLAttributes`<`HTMLDivElement`\> & { `state?`: `Record`<`string`, `unknown`\>  }

#### Defined in

[packages/framework/esm-react-utils/src/Extension.tsx:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/Extension.tsx#L7)

___

### ExtensionSlotProps

Ƭ **ExtensionSlotProps**: [`OldExtensionSlotBaseProps`](interfaces/OldExtensionSlotBaseProps.md) \| [`ExtensionSlotBaseProps`](interfaces/ExtensionSlotBaseProps.md) & `Omit`<`React.HTMLAttributes`<`HTMLDivElement`\>, ``"children"``\> & { `children?`: `React.ReactNode` \| (`extension`: `AssignedExtension`, `state?`: `Record`<`string`, `unknown`\>) => `React.ReactNode`  }

#### Defined in

[packages/framework/esm-react-utils/src/ExtensionSlot.tsx:24](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/ExtensionSlot.tsx#L24)

___

## Navigation Type Aliases

### TemplateParams

Ƭ **TemplateParams**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[packages/framework/esm-navigation/src/navigation/navigate.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/navigation/navigate.ts#L10)

___

## Offline Type Aliases

### KnownOmrsServiceWorkerMessages

Ƭ **KnownOmrsServiceWorkerMessages**: [`OnImportMapChangedMessage`](interfaces/OnImportMapChangedMessage.md) \| [`ClearDynamicRoutesMessage`](interfaces/ClearDynamicRoutesMessage.md) \| [`RegisterDynamicRouteMessage`](interfaces/RegisterDynamicRouteMessage.md)

#### Defined in

[packages/framework/esm-offline/src/service-worker-messaging.ts:41](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-messaging.ts#L41)

___

### OfflineMode

Ƭ **OfflineMode**: ``"on"`` \| ``"off"`` \| ``"unavailable"``

#### Defined in

[packages/framework/esm-offline/src/mode.ts:34](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/mode.ts#L34)

___

### OmrsOfflineCachingStrategy

Ƭ **OmrsOfflineCachingStrategy**: ``"network-only-or-cache-only"`` \| ``"network-first"``

* `cache-or-network`: The default strategy, equal to the absence of this header.
  The SW attempts to resolve the request via the network, but falls back to the cache if required.
  The service worker decides the strategy to be used.
* `network-first`: See https://developers.google.com/web/tools/workbox/modules/workbox-strategies#network_first_network_falling_back_to_cache.

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L15)

___

### OmrsOfflineHttpHeaderNames

Ƭ **OmrsOfflineHttpHeaderNames**: keyof [`OmrsOfflineHttpHeaders`](API.md#omrsofflinehttpheaders)

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L40)

___

### OmrsOfflineHttpHeaders

Ƭ **OmrsOfflineHttpHeaders**: `Object`

Defines the keys of the custom headers which can be appended to an HTTP request.
HTTP requests with these headers are handled in a special way by the SPA's service worker.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `x-omrs-offline-caching-strategy?` | [`OmrsOfflineCachingStrategy`](API.md#omrsofflinecachingstrategy) | Instructs the service worker to use a specific caching strategy for this request. |
| `x-omrs-offline-response-body?` | `string` | If the client is offline and the request cannot be read from the cache (i.e. if there is no way to receive any kind of data for this request), the service worker will return a response with the body in this header. |
| `x-omrs-offline-response-status?` | \`${number}\` | If the client is offline and the request cannot be read from the cache (i.e. if there is no way to receive any kind of data for this request), the service worker will return a response with the status code defined in this header. |

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:21](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L21)

___

## Other Type Aliases

### ConfigValue

Ƭ **ConfigValue**: `string` \| `number` \| `boolean` \| `void` \| `any`[] \| `object`

#### Defined in

[packages/framework/esm-config/src/types.ts:46](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/types.ts#L46)

___

### DefaultEvaluateReturnType

Ƭ **DefaultEvaluateReturnType**: `string` \| `number` \| `boolean` \| `Date` \| ``null`` \| `undefined`

The valid return types for `evaluate()` and `evaluateAsync()`

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:31](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L31)

___

### ExtensionDefinition

Ƭ **ExtensionDefinition**: { `featureFlag?`: `string` ; `meta?`: { `[k: string]`: `unknown`;  } ; `name`: `string` ; `offline?`: `boolean` ; `online?`: `boolean` ; `order?`: `number` ; `privileges?`: `string` \| `string`[] ; `slot?`: `string` ; `slots?`: `string`[]  } & { `component`: `string`  } \| { `component?`: `never`  }

A definition of an extension as extracted from an app's routes.json

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:171

___

### IconProps

Ƭ **IconProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `className?` | `Argument` |
| `fill?` | `string` |
| `size?` | `number` |

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L7)

___

### ModalDefinition

Ƭ **ModalDefinition**: { `name`: `string`  } & { `component`: `string`  } \| { `component?`: `never`  }

A definition of a modal as extracted from an app's routes.json

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:234

___

### NameUse

Ƭ **NameUse**: ``"usual"`` \| ``"official"`` \| ``"temp"`` \| ``"nickname"`` \| ``"anonymous"`` \| ``"old"`` \| ``"maiden"``

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:392

___

### OpenmrsRoutes

Ƭ **OpenmrsRoutes**: `Record`<`string`, [`OpenmrsAppRoutes`](interfaces/OpenmrsAppRoutes.md)\>

This interfaces describes the format of the overall rotues.json loaded by the app shell.
Basically, this is the same as the app routes, with each routes definition keyed by the app's name

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:388

___

### PageDefinition

Ƭ **PageDefinition**: { `component`: `string` ; `featureFlag?`: `string` ; `offline?`: `boolean` ; `online?`: `boolean` ; `order?`: `number`  } & { `route`: `string` \| `boolean` ; `routeRegex?`: `never`  } \| { `route?`: `never` ; `routeRegex`: `string`  }

A definition of a page extracted from an app's routes.json

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:113

___

### PictogramProps

Ƭ **PictogramProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `className?` | `Argument` |
| `size?` | `number` |

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L7)

___

### ProvidedConfig

Ƭ **ProvidedConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](interfaces/Config.md) |
| `source` | `string` |

#### Defined in

[packages/framework/esm-config/src/types.ts:68](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/types.ts#L68)

___

### ResourceName

Ƭ **ResourceName**: ``"DomainResource"`` \| ``"Organization"`` \| ``"Location"`` \| ``"HealthcareService"`` \| ``"Practitioner"`` \| ``"Patient"`` \| ``"RelatedPerson"`` \| ``"Device"`` \| ``"Account"`` \| ``"AllergyIntolerance"`` \| ``"Schedule"`` \| ``"Slot"`` \| ``"Appointment"`` \| ``"AppointmentResponse"`` \| ``"AuditEvent"`` \| ``"Basic"`` \| ``"BodySite"`` \| ``"Substance"`` \| ``"Medication"`` \| ``"Group"`` \| ``"Specimen"`` \| ``"DeviceComponent"`` \| ``"DeviceMetric"`` \| ``"ValueSet"`` \| ``"Questionnaire"`` \| ``"QuestionnaireResponse"`` \| ``"Observation"`` \| ``"FamilyMemberHistory"`` \| ``"DocumentReference"`` \| ``"DiagnosticOrder"`` \| ``"ProcedureRequest"`` \| ``"ReferralRequest"`` \| ``"Procedure"`` \| ``"ImagingStudy"`` \| ``"ImagingObjectSelection"`` \| ``"Media"`` \| ``"DiagnosticReport"`` \| ``"CommunicationRequest"`` \| ``"DeviceUseRequest"`` \| ``"MedicationOrder"`` \| ``"NutritionOrder"`` \| ``"Order"`` \| ``"ProcessRequest"`` \| ``"SupplyRequest"`` \| ``"VisionPrescription"`` \| ``"ClinicalImpression"`` \| ``"Condition"`` \| ``"EpisodeOfCare"`` \| ``"Encounter"`` \| ``"MedicationStatement"`` \| ``"RiskAssessment"`` \| ``"Goal"`` \| ``"CarePlan"`` \| ``"Composition"`` \| ``"Contract"`` \| ``"Coverage"`` \| ``"ClaimResponse"`` \| ``"Claim"`` \| ``"Communication"`` \| ``"StructureDefinition"`` \| ``"ConceptMap"`` \| ``"OperationDefinition"`` \| ``"Conformance"`` \| ``"DataElement"`` \| ``"DetectedIssue"`` \| ``"DeviceUseStatement"`` \| ``"DocumentManifest"`` \| ``"EligibilityRequest"`` \| ``"EligibilityResponse"`` \| ``"EnrollmentRequest"`` \| ``"EnrollmentResponse"`` \| ``"ExplanationOfBenefit"`` \| ``"Flag"`` \| ``"Immunization"`` \| ``"ImmunizationRecommendation"`` \| ``"ImplementationGuide"`` \| ``"List"`` \| ``"MedicationAdministration"`` \| ``"MedicationDispense"`` \| ``"OperationOutcome"`` \| ``"MessageHeader"`` \| ``"NamingSystem"`` \| ``"OrderResponse"`` \| ``"PaymentNotice"`` \| ``"PaymentReconciliation"`` \| ``"Person"`` \| ``"ProcessResponse"`` \| ``"Provenance"`` \| ``"SearchParameter"`` \| ``"Subscription"`` \| ``"SupplyDelivery"`` \| ``"TestScript"`` \| ``"Binary"`` \| ``"Bundle"`` \| ``"Parameters"``

#### Defined in

[packages/framework/esm-emr-api/src/types/fhir.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/types/fhir.ts#L7)

___

### SpaEnvironment

Ƭ **SpaEnvironment**: ``"production"`` \| ``"development"`` \| ``"test"``

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:73

___

### SvgIconProps

Ƭ **SvgIconProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `icon` | `string` |
| `iconProps` | [`IconProps`](API.md#iconprops) |

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:795](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L795)

___

### SvgPictogramProps

Ƭ **SvgPictogramProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pictogram` | `string` | the id of the pictogram |
| `pictogramProps` | [`PictogramProps`](API.md#pictogramprops) | properties when using the pictogram |

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:108](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L108)

___

### UpdateVisitPayload

Ƭ **UpdateVisitPayload**: `Partial`<[`NewVisitPayload`](interfaces/NewVisitPayload.md)\> & {}

#### Defined in

[packages/framework/esm-emr-api/src/types/visit-resource.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/types/visit-resource.ts#L18)

___

### Validator

Ƭ **Validator**: (`value`: `any`) => `void` \| `string`

#### Type declaration

▸ (`value`): `void` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`void` \| `string`

#### Defined in

[packages/framework/esm-config/src/types.ts:75](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/types.ts#L75)

___

### ValidatorFunction

Ƭ **ValidatorFunction**: (`value`: `any`) => `boolean`

#### Type declaration

▸ (`value`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`boolean`

#### Defined in

[packages/framework/esm-config/src/types.ts:73](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/types.ts#L73)

___

### VariablesMap

Ƭ **VariablesMap**: `Object`

An object containing the variable to use when evaluating this expression

#### Index signature

▪ [key: `string`]: `string` \| `number` \| `boolean` \| `Function` \| `RegExp` \| `object` \| ``null`` \| [`VariablesMap`](API.md#variablesmap) \| [`VariablesMap`](API.md#variablesmap)[]

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:26](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L26)

___

### WorkspaceDefinition

Ƭ **WorkspaceDefinition**: { `canHide?`: `boolean` ; `canMaximize?`: `boolean` ; `groups`: `string`[] ; `name`: `string` ; `preferredWindowSize?`: [`WorkspaceWindowState`](API.md#workspacewindowstate) ; `title`: `string` ; `type`: `string` ; `width?`: ``"narrow"`` \| ``"wider"`` \| ``"extra-wide"``  } & { `component`: `string`  } \| { `component?`: `never`  }

A definition of a workspace as extracted from an app's routes.json

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:264

___

### WorkspaceWindowState

Ƭ **WorkspaceWindowState**: ``"maximized"`` \| ``"hidden"`` \| ``"normal"``

#### Defined in

packages/framework/esm-globals/dist/types.d.ts:260

___

## Store Type Aliases

### ActionFunction

Ƭ **ActionFunction**<`T`\>: (`state`: `T`, ...`args`: `any`[]) => `Partial`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`state`, ...`args`): `Partial`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `T` |
| `...args` | `any`[] |

##### Returns

`Partial`<`T`\>

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L6)

___

### Actions

Ƭ **Actions**<`T`\>: (`store`: `StoreApi`<`T`\>) => `ActionFunctionsRecord`<`T`\> \| `ActionFunctionsRecord`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L10)

___

### BoundActions

Ƭ **BoundActions**<`T`, `A`\>: `A` extends `ActionFunctionsRecord`<`T`\> ? `BindFunctionsIn`<`A`\> : `A` extends (`store`: `StoreApi`<`T`\>) => `ActionFunctionsRecord`<`T`\> ? `BindFunctionsIn`<`ActionFunctionsRecord`<`T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`Actions`](API.md#actions)<`T`\> |

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L12)

___

## Translation Type Aliases

### CoreTranslationKey

Ƭ **CoreTranslationKey**: keyof typeof `coreTranslations`

#### Defined in

[packages/framework/esm-translations/src/index.ts:53](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-translations/src/index.ts#L53)

___

## UI Type Aliases

### ActionableNotificationType

Ƭ **ActionableNotificationType**: ``"error"`` \| ``"info"`` \| ``"info-square"`` \| ``"success"`` \| ``"warning"`` \| ``"warning-alt"``

#### Defined in

[packages/framework/esm-styleguide/src/notifications/actionable-notification.component.tsx:24](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/notifications/actionable-notification.component.tsx#L24)

___

### InlineNotificationType

Ƭ **InlineNotificationType**: ``"error"`` \| ``"info"`` \| ``"info-square"`` \| ``"success"`` \| ``"warning"`` \| ``"warning-alt"``

#### Defined in

[packages/framework/esm-styleguide/src/notifications/notification.component.tsx:23](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/notifications/notification.component.tsx#L23)

___

### LayoutType

Ƭ **LayoutType**: ``"phone"`` \| ``"tablet"`` \| ``"small-desktop"`` \| ``"large-desktop"``

#### Defined in

[packages/framework/esm-react-utils/src/useLayoutType.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLayoutType.ts#L4)

___

### PageHeaderProps

Ƭ **PageHeaderProps**: `XOR`<[`PageHeaderWrapperProps`](interfaces/PageHeaderWrapperProps.md), [`PageHeaderContentProps`](interfaces/PageHeaderContentProps.md)\>

#### Defined in

[packages/framework/esm-styleguide/src/page-header/page-header.component.tsx:30](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/page-header/page-header.component.tsx#L30)

___

### SnackbarType

Ƭ **SnackbarType**: ``"error"`` \| ``"info"`` \| ``"info-square"`` \| ``"success"`` \| ``"warning"`` \| ``"warning-alt"``

#### Defined in

[packages/framework/esm-styleguide/src/snackbars/snackbar.component.tsx:29](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/snackbars/snackbar.component.tsx#L29)

___

### ToastType

Ƭ **ToastType**: ``"error"`` \| ``"info"`` \| ``"info-square"`` \| ``"success"`` \| ``"warning"`` \| ``"warning-alt"``

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:23](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L23)

___

## Utility Type Aliases

### ArgumentsTuple

Ƭ **ArgumentsTuple**: [`any`, ...unknown[]]

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsSWR.ts:8](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsSWR.ts#L8)

___

### Key

Ƭ **Key**: `string` \| [`ArgumentsTuple`](API.md#argumentstuple) \| `undefined` \| ``null``

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsSWR.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsSWR.ts#L9)

___

### UseOpenmrsSWROptions

Ƭ **UseOpenmrsSWROptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `abortController?` | `AbortController` |
| `fetchInit?` | `FetchConfig` |
| `swrConfig?` | `SWRConfiguration` |
| `url?` | `string` \| (`key`: [`Key`](API.md#key)) => `string` |

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsSWR.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsSWR.ts#L10)

## API Variables

### UserHasAccess

• `Const` **UserHasAccess**: `React.FC`<[`UserHasAccessProps`](interfaces/UserHasAccessProps.md)\>

A React component that renders its children only if the current user exists and has the privilege(s)
specified by the `privilege` prop. This can be used not to render certain components when the user
doesn't have the permission to use this.

Note that for top-level extensions (i.e., the component that's the root of the extension), you don't
need to use this component. Instead, when registering the extension, declare the required privileges
as part of the extension registration. This is for use deeper in extensions or other components where
a separate permission check might be needed.

This can also be used to hide components when the current user is not logged in.

**`example`**
```ts
<Form>
  <UserHasAccess privilege='Form Finallizer'>
    <Checkbox id="finalize-form" value={formFinalized} onChange={handleChange} />
  </UserHasAccess>
</Form>
````

**`param`** Either a string for a single required privilege or an array of strings for a
  set of required privileges. Note that sets of required privileges must all be matched.

**`param`** What to render if the user does not have access or if the user is not currently
  logged in. If not provided, nothing will be rendered

**`param`** The children to be rendered only if the user is logged in and has the required
  privileges.

#### Defined in

[packages/framework/esm-react-utils/src/UserHasAccess.tsx:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/UserHasAccess.tsx#L40)

___

### attachmentUrl

• `Const` **attachmentUrl**: `string`

#### Defined in

[packages/framework/esm-emr-api/src/attachments.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/attachments.ts#L5)

___

### defaultVisitCustomRepresentation

• `Const` **defaultVisitCustomRepresentation**: `string`

#### Defined in

[packages/framework/esm-emr-api/src/visit-utils.ts:39](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-utils.ts#L39)

___

### fhirBaseUrl

• `Const` **fhirBaseUrl**: ``"/ws/fhir2/R4"``

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:9](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L9)

___

### getStartedVisit

• `Const` **getStartedVisit**: `BehaviorSubject`<``null`` \| [`VisitItem`](interfaces/VisitItem.md)\>

**`deprecated`**

#### Defined in

[packages/framework/esm-emr-api/src/visit-utils.ts:127](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-utils.ts#L127)

___

### restBaseUrl

• `Const` **restBaseUrl**: ``"/ws/rest/v1"``

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:8](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L8)

___

### sessionEndpoint

• `Const` **sessionEndpoint**: `string`

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L10)

___

## Config Validation Variables

### validators

• `Const` **validators**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inRange` | (`min`: `number`, `max`: `number`) => [`Validator`](API.md#validator) |
| `isUrl` | [`Validator`](API.md#validator) |
| `isUrlWithTemplateParameters` | (`allowedTemplateParameters`: `string`[] \| readonly `string`[]) => [`Validator`](API.md#validator) |
| `oneOf` | (`allowedValues`: `any`[] \| readonly `any`[]) => [`Validator`](API.md#validator) |

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:65](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L65)

___

## Extension Variables

### Extension

• `Const` **Extension**: `React.FC`<[`ExtensionProps`](API.md#extensionprops)\>

Represents the position in the DOM where each extension within
an extension slot is rendered.

Renders once for each extension attached to that extension slot.

Usage of this component *must* have an ancestor `<ExtensionSlot>`,
and *must* only be used once within that `<ExtensionSlot>`.

#### Defined in

[packages/framework/esm-react-utils/src/Extension.tsx:20](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/Extension.tsx#L20)

___

## Offline Variables

### offlineUuidPrefix

• `Const` **offlineUuidPrefix**: ``"OFFLINE+"``

#### Defined in

[packages/framework/esm-offline/src/uuid-support.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/uuid-support.ts#L4)

___

### omrsOfflineCachingStrategyHttpHeaderName

• `Const` **omrsOfflineCachingStrategyHttpHeaderName**: ``"x-omrs-offline-caching-strategy"``

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L5)

___

### omrsOfflineResponseBodyHttpHeaderName

• `Const` **omrsOfflineResponseBodyHttpHeaderName**: ``"x-omrs-offline-response-body"``

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L3)

___

### omrsOfflineResponseStatusHttpHeaderName

• `Const` **omrsOfflineResponseStatusHttpHeaderName**: ``"x-omrs-offline-response-status"``

#### Defined in

[packages/framework/esm-offline/src/service-worker-http-headers.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-http-headers.ts#L4)

___

## Other Variables

### ActivityIcon

• `Const` **ActivityIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L15)

___

### AddIcon

• `Const` **AddIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:23](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L23)

___

### AllergiesIcon

• `Const` **AllergiesIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\> = `WarningIcon`

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:727](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L727)

___

### AppointmentsPictogram

• `Const` **AppointmentsPictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L12)

___

### ArrowDownIcon

• `Const` **ArrowDownIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:31](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L31)

___

### ArrowLeftIcon

• `Const` **ArrowLeftIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:39](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L39)

___

### ArrowRightIcon

• `Const` **ArrowRightIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:47](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L47)

___

### ArrowUpIcon

• `Const` **ArrowUpIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:55](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L55)

___

### AttachmentIcon

• `Const` **AttachmentIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\> = `DocumentAttachmentIcon`

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:732](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L732)

___

### BabyIcon

• `Const` **BabyIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:63](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L63)

___

### CalendarHeatMapIcon

• `Const` **CalendarHeatMapIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:71](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L71)

___

### CalendarIcon

• `Const` **CalendarIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:79](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L79)

___

### CaretDownIcon

• `Const` **CaretDownIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:87](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L87)

___

### CaretLeftIcon

• `Const` **CaretLeftIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:95](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L95)

___

### CaretRightIcon

• `Const` **CaretRightIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:103](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L103)

___

### CaretUpIcon

• `Const` **CaretUpIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:111](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L111)

___

### ChartAverageIcon

• `Const` **ChartAverageIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:135](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L135)

___

### CheckmarkFilledIcon

• `Const` **CheckmarkFilledIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:119](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L119)

___

### CheckmarkOutlineIcon

• `Const` **CheckmarkOutlineIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:127](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L127)

___

### ChemistryIcon

• `Const` **ChemistryIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:143](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L143)

___

### ChevronDownIcon

• `Const` **ChevronDownIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:151](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L151)

___

### ChevronLeftIcon

• `Const` **ChevronLeftIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:159](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L159)

___

### ChevronRightIcon

• `Const` **ChevronRightIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:167](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L167)

___

### ChevronUpIcon

• `Const` **ChevronUpIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:175](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L175)

___

### CloseFilledIcon

• `Const` **CloseFilledIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:183](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L183)

___

### CloseIcon

• `Const` **CloseIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:199](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L199)

___

### CloseOutlineIcon

• `Const` **CloseOutlineIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:191](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L191)

___

### ConditionsIcon

• `Const` **ConditionsIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\> = `ListCheckedIcon`

Conditions

Note this is an alias for ListCheckedIcon

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:739](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L739)

___

### DiagnosisTags

• `Const` **DiagnosisTags**: `React.FC`<`DiagnosisTagsProps`\>

This component takes a list of diagnoses and displays them as
Carbon tags, with colors configured base on whether the diagnoses are primary
or secondary.

#### Defined in

[packages/framework/esm-styleguide/src/diagnosis-tags/diagnosis-tags.component.tsx:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/diagnosis-tags/diagnosis-tags.component.tsx#L16)

___

### DocumentAttachmentIcon

• `Const` **DocumentAttachmentIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:207](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L207)

___

### DocumentIcon

• `Const` **DocumentIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:215](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L215)

___

### DownloadIcon

• `Const` **DownloadIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:223](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L223)

___

### DrugOrderIcon

• `Const` **DrugOrderIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:231](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L231)

___

### EditIcon

• `Const` **EditIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:239](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L239)

___

### ErrorState

• `Const` **ErrorState**: `React.FC`<[`ErrorStateProps`](interfaces/ErrorStateProps.md)\>

#### Defined in

[packages/framework/esm-styleguide/src/error-state/error-state.component.tsx:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/error-state/error-state.component.tsx#L12)

___

### EventScheduleIcon

• `Const` **EventScheduleIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:247](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L247)

___

### EventsIcon

• `Const` **EventsIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:255](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L255)

___

### GenderFemaleIcon

• `Const` **GenderFemaleIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:263](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L263)

___

### GenderMaleIcon

• `Const` **GenderMaleIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:270](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L270)

___

### GenderOtherIcon

• `Const` **GenderOtherIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:277](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L277)

___

### GenderUnknownIcon

• `Const` **GenderUnknownIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:284](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L284)

___

### GenericOrderTypeIcon

• `Const` **GenericOrderTypeIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:292](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L292)

___

### GroupAccessIcon

• `Const` **GroupAccessIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:308](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L308)

___

### GroupIcon

• `Const` **GroupIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:300](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L300)

___

### HomePictogram

• `Const` **HomePictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L18)

___

### HospitalBedIcon

• `Const` **HospitalBedIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:316](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L316)

___

### Icon

• `Const` **Icon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`SvgIconProps`](API.md#svgiconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

This is a utility type for custom icons that use the svg-sprite-loader to bundle custom icons

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:803](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L803)

___

### ImageMedicalIcon

• `Const` **ImageMedicalIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:324](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L324)

___

### InPatientPictogram

• `Const` **InPatientPictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:24](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L24)

___

### InformationFilledIcon

• `Const` **InformationFilledIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:348](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L348)

___

### InformationIcon

• `Const` **InformationIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:340](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L340)

___

### InformationSquareIcon

• `Const` **InformationSquareIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:356](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L356)

___

### InventoryManagementIcon

• `Const` **InventoryManagementIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:332](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L332)

___

### LabOrderIcon

• `Const` **LabOrderIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:364](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L364)

___

### LaboratoryPictogram

• `Const` **LaboratoryPictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:30](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L30)

___

### ListCheckedIcon

• `Const` **ListCheckedIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:372](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L372)

___

### LocationIcon

• `Const` **LocationIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:380](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L380)

___

### LocationPicker

• `Const` **LocationPicker**: `React.FC`<`LocationPickerProps`\>

#### Defined in

[packages/framework/esm-styleguide/src/location-picker/location-picker.component.tsx:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/location-picker/location-picker.component.tsx#L16)

___

### MaterialOrderIcon

• `Const` **MaterialOrderIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:388](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L388)

___

### MaximizeIcon

• `Const` **MaximizeIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:396](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L396)

___

### MaybeIcon

• `Const` **MaybeIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<{ `fallback?`: `ReactNode` ; `icon`: `string`  } & [`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

This is a utility component that takes an `icon` and renders it if the sprite for the icon
is available. The goal is to make it easier to conditionally render configuration-specified icons.

**`example`**
```tsx
  <MaybeIcon icon='omrs-icon-baby' className={styles.myIconStyles} />
```

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:762](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L762)

___

### MaybePictogram

• `Const` **MaybePictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<{ `fallback?`: `ReactNode` ; `pictogram`: `string`  } & [`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

This is a utility component that takes an `pictogram` and render it if the sprite for the pictogram
is available. The goal is to make it easier to conditionally render configuration-specified pictograms.

**`example`**
```tsx
  <MaybePictogram pictogram='omrs-icon-baby' className={styles.myPictogramStyles} />
```

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:75](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L75)

___

### MedicationIcon

• `Const` **MedicationIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:404](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L404)

___

### MessageQueueIcon

• `Const` **MessageQueueIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:412](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L412)

___

### MicroscopeIcon

• `Const` **MicroscopeIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:420](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L420)

___

### MoneyIcon

• `Const` **MoneyIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

Billing

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:429](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L429)

___

### MotherIcon

• `Const` **MotherIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:437](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L437)

___

### MovementIcon

• `Const` **MovementIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:445](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L445)

___

### OpenmrsDatePicker

• `Const` **OpenmrsDatePicker**: `ForwardRefExoticComponent`<[`OpenmrsDatePickerProps`](interfaces/OpenmrsDatePickerProps.md) & `RefAttributes`<`HTMLDivElement`\>\>

A date picker component to select a single date. Based on React Aria, but styled to look like Carbon.

#### Defined in

[packages/framework/esm-styleguide/src/datepicker/OpenmrsDatePicker.tsx:94](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/datepicker/OpenmrsDatePicker.tsx#L94)

___

### OverflowMenuHorizontalIcon

• `Const` **OverflowMenuHorizontalIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:453](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L453)

___

### OverflowMenuVerticalIcon

• `Const` **OverflowMenuVerticalIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:461](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L461)

___

### PasswordIcon

• `Const` **PasswordIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:684](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L684)

___

### PatientListsPictogram

• `Const` **PatientListsPictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L36)

___

### PedestrianFamilyIcon

• `Const` **PedestrianFamilyIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:469](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L469)

___

### PenIcon

• `Const` **PenIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:477](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L477)

___

### PharmacyPictogram

• `Const` **PharmacyPictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:42](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L42)

___

### Pictogram

• `Const` **Pictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`SvgPictogramProps`](API.md#svgpictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

This is a utility type for custom pictograms. Please maintain alphabetical order when adding new pictograms for readability.

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:118](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L118)

___

### PrinterIcon

• `Const` **PrinterIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:485](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L485)

___

### ProcedureOrderIcon

• `Const` **ProcedureOrderIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:493](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L493)

___

### ProgramsIcon

• `Const` **ProgramsIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:501](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L501)

___

### RadiologyIcon

• `Const` **RadiologyIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\> = `ImageMedicalIcon`

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:744](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L744)

___

### ReferralOrderIcon

• `Const` **ReferralOrderIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:509](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L509)

___

### RegistrationPictogram

• `Const` **RegistrationPictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:48](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L48)

___

### RenderIfValueIsTruthy

• `Const` **RenderIfValueIsTruthy**: `React.FC`<`PropsWithChildren`<{ `fallback?`: `React.ReactNode` ; `value`: `unknown`  }\>\>

A really simple component that renders its children if the prop named `value` has a truthy value

**`example`**
```tsx
<RenderIfValueIsTruthy value={variable}>
 <Component value={variable} />
</RenderIfValueIsTruthy>
````

**`param`** The value to check whether or not its truthy

**`param`** What to render if the value is not truthy. If not specified, nothing will be rendered

**`param`** The components to render if the `value` is truthy

#### Defined in

[packages/framework/esm-react-utils/src/RenderIfValueIsTruthy.tsx:17](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/RenderIfValueIsTruthy.tsx#L17)

___

### RenewIcon

• `Const` **RenewIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:517](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L517)

___

### ReportIcon

• `Const` **ReportIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:525](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L525)

___

### ResetIcon

• `Const` **ResetIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:533](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L533)

___

### SaveIcon

• `Const` **SaveIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:549](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L549)

___

### SearchIcon

• `Const` **SearchIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:557](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L557)

___

### ServiceQueuesPictogram

• `Const` **ServiceQueuesPictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:54](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L54)

___

### ShoppingCartAddItemIcon

• `Const` **ShoppingCartAddItemIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\> = `ShoppingCartArrowDownIcon`

Used as a button to add an item to the Order basket from a search

Note this is an alias for ShoppingCartArrowDownIcon

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:751](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L751)

___

### ShoppingCartArrowDownIcon

• `Const` **ShoppingCartArrowDownIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

Used as a button to add an item to the Order basket from a search

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:583](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L583)

___

### ShoppingCartIcon

• `Const` **ShoppingCartIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

Order Basket, the UI to enter Orders for Medications, Referrals, Labs, Procedures and more

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:574](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L574)

___

### StickyNoteAddIcon

• `Const` **StickyNoteAddIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

Used as action button to open ward in-patient note workspace

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:592](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L592)

___

### StockManagementPictogram

• `Const` **StockManagementPictogram**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`PictogramProps`](API.md#pictogramprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/pictograms/pictograms.tsx:60](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/pictograms/pictograms.tsx#L60)

___

### SwitcherIcon

• `Const` **SwitcherIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:565](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L565)

___

### SyringeIcon

• `Const` **SyringeIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:600](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L600)

___

### TableIcon

• `Const` **TableIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:617](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L617)

___

### TableOfContentsIcon

• `Const` **TableOfContentsIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

Used as a button to add an item to the Order basket from a search

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:609](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L609)

___

### TimeIcon

• `Const` **TimeIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

Lab investigations

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:626](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L626)

___

### ToolsIcon

• `Const` **ToolsIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:634](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L634)

___

### TranslateIcon

• `Const` **TranslateIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:541](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L541)

___

### TrashCanIcon

• `Const` **TrashCanIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:642](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L642)

___

### TreeViewAltIcon

• `Const` **TreeViewAltIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:650](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L650)

___

### UserAvatarIcon

• `Const` **UserAvatarIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

User of OpenMRS e.g. My Account

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:659](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L659)

___

### UserFollowIcon

• `Const` **UserFollowIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:667](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L667)

___

### UserIcon

• `Const` **UserIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:692](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L692)

___

### UserXrayIcon

• `Const` **UserXrayIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

UserXray Icon

`UserXrayIcon` is also used for imaging orders

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:678](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L678)

___

### ViewIcon

• `Const` **ViewIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:708](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L708)

___

### ViewOffIcon

• `Const` **ViewOffIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:700](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L700)

___

### WarningIcon

• `Const` **WarningIcon**: `MemoExoticComponent`<`ForwardRefExoticComponent`<[`IconProps`](API.md#iconprops) & `RefAttributes`<`SVGSVGElement`\>\>\>

#### Defined in

[packages/framework/esm-styleguide/src/icons/icons.tsx:716](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/icons/icons.tsx#L716)

___

### backendDependencies

• `Const` **backendDependencies**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fhir2` | `string` |
| `webservices.rest` | `string` |

#### Defined in

[packages/framework/esm-api/src/openmrs-backend-dependencies.ts:1](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-backend-dependencies.ts#L1)

___

## UI Variables

### LeftNavMenu

• `Const` **LeftNavMenu**: `ForwardRefExoticComponent`<`LeftNavMenuProps` & `RefAttributes`<`HTMLElement`\>\>

This component renders the left nav in desktop mode. It's also used to render the same
nav when the hamburger menu is clicked on in tablet mode. See side-menu-panel.component.tsx

Use of this component by anything other than <SideMenuPanel> (where isChildOfHeader == false)
is deprecated; it simply renders nothing.

#### Defined in

[packages/framework/esm-styleguide/src/left-nav/index.tsx:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/left-nav/index.tsx#L32)

___

### PageHeader

• `Const` **PageHeader**: `React.FC`<[`PageHeaderProps`](API.md#pageheaderprops)\>

The page header is typically located at the top of a dashboard. It includes a pictogram on the left,
the name of the dashboard or page, and the `implementationName` from the configuration, which is typically
the name of the clinic or the authority that is using the implementation. It can also include interactive
content on the right-hand side. It can be used in two ways:

1. Alone, in order to render just the page header, with no content on the right side:

**`example`**
```tsx
  <PageHeader title="My Dashboard" illustration={<Illustration />} />
```

2. Wrapped around the [PageHeaderContent](API.md#pageheadercontent) component, in order to render the page header on the left
and some other content on the right side:

**`example`**
```tsx
  <PageHeader>
    <PageHeaderContent title="My Dashboard" illustration={<Illustration />} />
    <Button>Click me</Button>
  </PageHeader>
```

#### Defined in

[packages/framework/esm-styleguide/src/page-header/page-header.component.tsx:58](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/page-header/page-header.component.tsx#L58)

___

### PageHeaderContent

• `Const` **PageHeaderContent**: `React.FC`<[`PageHeaderContentProps`](interfaces/PageHeaderContentProps.md)\>

The PageHeaderContent component should be used inside the [PageHeader](API.md#pageheader) component. It is used if the page
header should include some content on the right side, in addition to the pictogram and the name of the page.
If only the page header is needed, without any additional content, the [PageHeader](API.md#pageheader) component can be used
on its own, and the PageHeaderContent component is not needed.

**`example`**
```tsx
  <PageHeader>
    <PageHeaderContent title="My Dashboard" illustration={<Illustration />} />
    <Button>Click me</Button>
  </PageHeader>
```

#### Defined in

[packages/framework/esm-styleguide/src/page-header/page-header.component.tsx:90](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/page-header/page-header.component.tsx#L90)

___

### ResponsiveWrapper

• `Const` **ResponsiveWrapper**: `React.FC`<[`ResponsiveWrapperProps`](interfaces/ResponsiveWrapperProps.md)\>

ResponsiveWrapper enables a responsive behavior for the component its wraps, providing a different rendering based on the current layout type.
On desktop, it renders the children as is, while on a tablet, it wraps them in a Carbon Layer https://react.carbondesignsystem.com/?path=/docs/components-layer--overview component.
This provides a light background for form inputs on tablets, in accordance with the design requirements.

#### Defined in

[packages/framework/esm-styleguide/src/responsive-wrapper/responsive-wrapper.component.tsx:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/responsive-wrapper/responsive-wrapper.component.tsx#L15)

___

## Workspace Variables

### ActionMenuButton

• `Const` **ActionMenuButton**: `React.FC`<[`ActionMenuButtonProps`](interfaces/ActionMenuButtonProps.md)\>

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/action-menu-button/action-menu-button.component.tsx:38](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/action-menu-button/action-menu-button.component.tsx#L38)

## API Functions

### clearCurrentUser

▸ **clearCurrentUser**(): `void`

#### Returns

`void`

#### Defined in

[packages/framework/esm-api/src/current-user.ts:177](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L177)

___

### createAttachment

▸ **createAttachment**(`patientUuid`, `fileToUpload`): `Promise`<`FetchResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `fileToUpload` | [`UploadedFile`](interfaces/UploadedFile.md) |

#### Returns

`Promise`<`FetchResponse`<`any`\>\>

#### Defined in

[packages/framework/esm-emr-api/src/attachments.ts:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/attachments.ts#L19)

___

### deleteAttachmentPermanently

▸ **deleteAttachmentPermanently**(`attachmentUuid`, `abortController`): `Promise`<`FetchResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachmentUuid` | `string` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<`FetchResponse`<`any`\>\>

#### Defined in

[packages/framework/esm-emr-api/src/attachments.ts:38](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/attachments.ts#L38)

___

### fetchCurrentPatient

▸ **fetchCurrentPatient**(`patientUuid`, `fetchInit?`, `includeOfflinePatients?`): `Promise`<`fhir.Patient` \| ``null``\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `patientUuid` | [`PatientUuid`](API.md#patientuuid) | `undefined` |
| `fetchInit?` | `FetchConfig` | `undefined` |
| `includeOfflinePatients` | `boolean` | `true` |

#### Returns

`Promise`<`fhir.Patient` \| ``null``\>

#### Defined in

[packages/framework/esm-emr-api/src/current-patient.ts:21](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/current-patient.ts#L21)

___

### getAttachmentByUuid

▸ **getAttachmentByUuid**(`attachmentUuid`, `abortController`): `Promise`<`FetchResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachmentUuid` | `string` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<`FetchResponse`<`any`\>\>

#### Defined in

[packages/framework/esm-emr-api/src/attachments.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/attachments.ts#L7)

___

### getAttachments

▸ **getAttachments**(`patientUuid`, `includeEncounterless`, `abortController`): `Promise`<`FetchResponse`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `includeEncounterless` | `boolean` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<`FetchResponse`<`any`\>\>

#### Defined in

[packages/framework/esm-emr-api/src/attachments.ts:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/attachments.ts#L13)

___

### getCurrentUser

▸ **getCurrentUser**(): `Observable`<[`Session`](interfaces/Session.md)\>

The getCurrentUser function returns an observable that produces
**zero or more values, over time**. It will produce zero values
by default if the user is not logged in. And it will provide a
first value when the logged in user is fetched from the server.
Subsequent values will be produced whenever the user object is
updated.

#### Returns

`Observable`<[`Session`](interfaces/Session.md)\>

An Observable that produces zero or more values (as
  described above). The values produced will be a user object (if
  `includeAuthStatus` is set to `false`) or an object with a session
  and authenticated property (if `includeAuthStatus` is set to `true`).

#### Example

```js
import { getCurrentUser } from '@openmrs/esm-api'
const subscription = getCurrentUser().subscribe(
  user => console.log(user)
)
subscription.unsubscribe()
getCurrentUser({includeAuthStatus: true}).subscribe(
  data => console.log(data.authenticated)
)
```

#### Be sure to unsubscribe when your component unmounts

Otherwise your code will continue getting updates to the user object
even after the UI component is gone from the screen. This is a memory
leak and source of bugs.

#### Defined in

[packages/framework/esm-api/src/current-user.ts:66](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L66)

▸ **getCurrentUser**(`opts`): `Observable`<[`Session`](interfaces/Session.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.includeAuthStatus` | ``true`` |

#### Returns

`Observable`<[`Session`](interfaces/Session.md)\>

#### Defined in

[packages/framework/esm-api/src/current-user.ts:67](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L67)

▸ **getCurrentUser**(`opts`): `Observable`<[`LoggedInUser`](interfaces/LoggedInUser.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.includeAuthStatus` | ``false`` |

#### Returns

`Observable`<[`LoggedInUser`](interfaces/LoggedInUser.md)\>

#### Defined in

[packages/framework/esm-api/src/current-user.ts:68](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L68)

___

### getLocations

▸ **getLocations**(`tagUuidOrName?`, `query?`): `Observable`<[`Location`](interfaces/Location.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tagUuidOrName` | ``null`` \| `string` | `null` |
| `query` | ``null`` \| `string` | `null` |

#### Returns

`Observable`<[`Location`](interfaces/Location.md)[]\>

#### Defined in

[packages/framework/esm-emr-api/src/location.ts:14](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/location.ts#L14)

___

### getLoggedInUser

▸ **getLoggedInUser**(): `Promise`<[`LoggedInUser`](interfaces/LoggedInUser.md)\>

#### Returns

`Promise`<[`LoggedInUser`](interfaces/LoggedInUser.md)\>

#### Defined in

[packages/framework/esm-api/src/current-user.ts:201](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L201)

___

### getSessionLocation

▸ **getSessionLocation**(): `Promise`<`undefined` \| [`SessionLocation`](interfaces/SessionLocation.md)\>

#### Returns

`Promise`<`undefined` \| [`SessionLocation`](interfaces/SessionLocation.md)\>

#### Defined in

[packages/framework/esm-api/src/current-user.ts:219](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L219)

___

### getSessionStore

▸ **getSessionStore**(): `StoreApi`<[`SessionStore`](API.md#sessionstore)\>

#### Returns

`StoreApi`<[`SessionStore`](API.md#sessionstore)\>

#### Defined in

[packages/framework/esm-api/src/current-user.ts:93](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L93)

___

### getVisitStore

▸ **getVisitStore**(): `StoreApi`<[`VisitStoreState`](interfaces/VisitStoreState.md)\>

#### Returns

`StoreApi`<[`VisitStoreState`](interfaces/VisitStoreState.md)\>

#### Defined in

[packages/framework/esm-emr-api/src/visit-utils.ts:57](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-utils.ts#L57)

___

### getVisitTypes

▸ **getVisitTypes**(): `Observable`<[`VisitType`](interfaces/VisitType.md)[]\>

#### Returns

`Observable`<[`VisitType`](interfaces/VisitType.md)[]\>

#### Defined in

[packages/framework/esm-emr-api/src/visit-type.ts:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-type.ts#L15)

___

### getVisitsForPatient

▸ **getVisitsForPatient**(`patientUuid`, `abortController`, `v?`): `Promise`<`FetchResponse`<{ `results`: [`Visit`](interfaces/Visit.md)[]  }\>\>

**`deprecated`** Use the `useVisit` hook instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `abortController` | `AbortController` |
| `v?` | `string` |

#### Returns

`Promise`<`FetchResponse`<{ `results`: [`Visit`](interfaces/Visit.md)[]  }\>\>

#### Defined in

[packages/framework/esm-emr-api/src/visit-utils.ts:110](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-utils.ts#L110)

___

### makeUrl

▸ **makeUrl**(`path`): `string`

Append `path` to the OpenMRS SPA base.

#### Example

```ts
makeUrl('/foo/bar');
// => '/openmrs/foo/bar'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:22](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L22)

___

### openmrsFetch

▸ **openmrsFetch**<`T`\>(`path`, `fetchInit?`): `Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`T`\>\>

The openmrsFetch function is a wrapper around the
[browser's built-in fetch function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch),
with extra handling for OpenMRS-specific API behaviors, such as
request headers, authentication, authorization, and the API urls.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | A string url to make the request to. Note that the   openmrs base url (by default `/openmrs`) will be automatically   prepended to the URL, so there is no need to include it. |
| `fetchInit` | [`FetchConfig`](interfaces/FetchConfig.md) | A [fetch init object](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Syntax).   Note that the `body` property does not need to be `JSON.stringify()`ed   because openmrsFetch will do that for you. |

#### Returns

`Promise`<[`FetchResponse`](interfaces/FetchResponse.md)<`T`\>\>

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  that resolves with a [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response).
  Note that the openmrs version of the Response object has already
  downloaded the HTTP response body as json, and has an additional
  `data` property with the HTTP response json as a javascript object.

#### Example
```js
import { openmrsFetch } from '@openmrs/esm-api'
const abortController = new AbortController();
openmrsFetch(`${restBaseUrl}/session', {signal: abortController.signal})
  .then(response => {
    console.log(response.data.authenticated)
  })
  .catch(err => {
    console.error(err.status);
  })
abortController.abort();
openmrsFetch(`${restBaseUrl}/session', {
  method: 'POST',
  body: {
    username: 'hi',
    password: 'there',
  }
})
```

#### Cancellation

To cancel a network request, use an
[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort).
It is best practice to cancel your network requests when the user
navigates away from a page while the request is pending request, to
free up memory and network resources and to prevent race conditions.

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:82](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L82)

___

### openmrsObservableFetch

▸ **openmrsObservableFetch**<`T`\>(`url`, `fetchInit?`): `Observable`<[`FetchResponse`](interfaces/FetchResponse.md)<`T`\>\>

The openmrsObservableFetch function is a wrapper around openmrsFetch
that returns an [Observable](https://rxjs-dev.firebaseapp.com/guide/observable)
instead of a promise. It exists in case using an Observable is
preferred or more convenient than a promise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | See [openmrsFetch](API.md#openmrsfetch) |
| `fetchInit` | [`FetchConfig`](interfaces/FetchConfig.md) | See [openmrsFetch](API.md#openmrsfetch) |

#### Returns

`Observable`<[`FetchResponse`](interfaces/FetchResponse.md)<`T`\>\>

An Observable that produces exactly one Response object.
The response object is exactly the same as for [openmrsFetch](API.md#openmrsfetch).

#### Example

```js
import { openmrsObservableFetch } from '@openmrs/esm-api'
const subscription = openmrsObservableFetch(`${restBaseUrl}/session').subscribe(
  response => console.log(response.data),
  err => {throw err},
  () => console.log('finished')
)
subscription.unsubscribe()
```

#### Cancellation

To cancel the network request, simply call `subscription.unsubscribe();`

#### Defined in

[packages/framework/esm-api/src/openmrs-fetch.ts:269](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/openmrs-fetch.ts#L269)

___

### refetchCurrentUser

▸ **refetchCurrentUser**(`username?`, `password?`): `Promise`<[`SessionStore`](API.md#sessionstore)\>

The `refetchCurrentUser` function causes a network request to redownload
the user. All subscribers to the current user will be notified of the
new users once the new version of the user object is downloaded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `username?` | `string` |
| `password?` | `string` |

#### Returns

`Promise`<[`SessionStore`](API.md#sessionstore)\>

The same observable as returned by [getCurrentUser](API.md#getcurrentuser).

#### Example
```js
import { refetchCurrentUser } from '@openmrs/esm-api'
refetchCurrentUser()
```

#### Defined in

[packages/framework/esm-api/src/current-user.ts:163](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L163)

___

### saveVisit

▸ **saveVisit**(`payload`, `abortController`): `Promise`<`FetchResponse`<[`Visit`](interfaces/Visit.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`NewVisitPayload`](interfaces/NewVisitPayload.md) |
| `abortController` | `AbortController` |

#### Returns

`Promise`<`FetchResponse`<[`Visit`](interfaces/Visit.md)\>\>

#### Defined in

[packages/framework/esm-emr-api/src/visit-utils.ts:81](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-utils.ts#L81)

___

### setCurrentVisit

▸ **setCurrentVisit**(`patientUuid`, `visitUuid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `visitUuid` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-emr-api/src/visit-utils.ts:61](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-utils.ts#L61)

___

### setSessionLocation

▸ **setSessionLocation**(`locationUuid`, `abortController`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `locationUuid` | `string` |
| `abortController` | `AbortController` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/framework/esm-api/src/current-user.ts:228](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L228)

___

### setUserLanguage

▸ **setUserLanguage**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Session`](interfaces/Session.md) |

#### Returns

`void`

#### Defined in

[packages/framework/esm-api/src/current-user.ts:116](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L116)

___

### setUserProperties

▸ **setUserProperties**(`userUuid`, `userProperties`, `abortController?`): `Promise`<[`SessionStore`](API.md#sessionstore)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userUuid` | `string` |
| `userProperties` | `Object` |
| `abortController?` | `AbortController` |

#### Returns

`Promise`<[`SessionStore`](API.md#sessionstore)\>

#### Defined in

[packages/framework/esm-api/src/current-user.ts:241](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L241)

___

### toLocationObject

▸ **toLocationObject**(`openmrsRestForm`): [`Location`](interfaces/Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `openmrsRestForm` | `any` |

#### Returns

[`Location`](interfaces/Location.md)

#### Defined in

[packages/framework/esm-emr-api/src/location.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/location.ts#L7)

___

### toVisitTypeObject

▸ **toVisitTypeObject**(`openmrsRestForm`): [`VisitType`](interfaces/VisitType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `openmrsRestForm` | `any` |

#### Returns

[`VisitType`](interfaces/VisitType.md)

#### Defined in

[packages/framework/esm-emr-api/src/visit-type.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-type.ts#L7)

___

### updateVisit

▸ **updateVisit**(`uuid`, `payload`, `abortController`): `Promise`<`FetchResponse`<[`Visit`](interfaces/Visit.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |
| `payload` | `Partial`<[`NewVisitPayload`](interfaces/NewVisitPayload.md)\> |
| `abortController` | `AbortController` |

#### Returns

`Promise`<`FetchResponse`<[`Visit`](interfaces/Visit.md)\>\>

#### Defined in

[packages/framework/esm-emr-api/src/visit-utils.ts:92](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-emr-api/src/visit-utils.ts#L92)

___

### useAttachments

▸ **useAttachments**(`patientUuid`, `includeEncounterless`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |
| `includeEncounterless` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `AttachmentResponse`[] |
| `error` | `any` |
| `isLoading` | `boolean` |
| `isValidating` | `boolean` |
| `mutate` | `KeyedMutator`<`FetchResponse`<{ `results`: `AttachmentResponse`[]  }\>\> |

#### Defined in

[packages/framework/esm-react-utils/src/useAttachments.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAttachments.ts#L7)

___

### useEmrConfiguration

▸ **useEmrConfiguration**(): `Object`

React hook for fetching and managing OpenMRS EMR configuration

#### Returns

`Object`

Object containing:
  - emrConfiguration: EmrApiConfigurationResponse | undefined - The EMR configuration data
  - isLoadingEmrConfiguration: boolean - Loading state indicator
  - mutateEmrConfiguration: Function - SWR's mutate function for manual revalidation
  - errorFetchingEmrConfiguration: Error | undefined - Error object if request fails

| Name | Type |
| :------ | :------ |
| `emrConfiguration` | `undefined` \| [`EmrApiConfigurationResponse`](interfaces/EmrApiConfigurationResponse.md) |
| `errorFetchingEmrConfiguration` | `undefined` \| `Error` |
| `isLoadingEmrConfiguration` | `boolean` |
| `mutateEmrConfiguration` | `KeyedMutator`<`FetchResponse`<[`EmrApiConfigurationResponse`](interfaces/EmrApiConfigurationResponse.md)\>\> |

#### Defined in

[packages/framework/esm-react-utils/src/useEmrConfiguration.ts:158](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useEmrConfiguration.ts#L158)

___

### useLocations

▸ **useLocations**(`tagUuidOrName?`, `query?`): `Location`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tagUuidOrName` | ``null`` \| `string` | `null` |
| `query` | ``null`` \| `string` | `null` |

#### Returns

`Location`[]

#### Defined in

[packages/framework/esm-react-utils/src/useLocations.tsx:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLocations.tsx#L5)

___

### usePatient

▸ **usePatient**(`patientUuid?`): `Object`

This React hook returns a patient object. If the `patientUuid` is provided
as a parameter, then the patient for that UUID is returned. If the parameter
is not provided, the patient UUID is obtained from the current route, and
a route listener is set up to update the patient whenever the route changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `undefined` \| ``null`` \| `Error` |
| `isLoading` | `boolean` |
| `patient` | `undefined` \| [`NullablePatient`](API.md#nullablepatient) |
| `patientUuid` | ``null`` \| `string` |

#### Defined in

[packages/framework/esm-react-utils/src/usePatient.ts:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/usePatient.ts#L19)

___

### usePrimaryIdentifierCode

▸ **usePrimaryIdentifierCode**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `Error` \| `undefined` |
| `isLoading` | `boolean` |
| `primaryIdentifierCode` | `string` \| `undefined` |

#### Defined in

[packages/framework/esm-react-utils/src/usePrimaryIdentifierResource.ts:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/usePrimaryIdentifierResource.ts#L13)

___

### useSession

▸ **useSession**(): `Session`

Gets the current user session information. Returns an object with
property `authenticated` == `false` if the user is not logged in.

Uses Suspense. This hook will always either return a Session object
or throw for Suspense. It will never return `null`/`undefined`.

#### Returns

`Session`

Current user session information

#### Defined in

[packages/framework/esm-react-utils/src/useSession.ts:17](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useSession.ts#L17)

___

### useVisit

▸ **useVisit**(`patientUuid`, `representation?`): [`VisitReturnType`](interfaces/VisitReturnType.md)

This React hook returns visit information if the patient UUID is not null. There are
potentially two relevant visits at a time: "active" and "current".

The active visit is the most recent visit without an end date. The presence of an active
visit generally means that the patient is in the facility.

The current visit is the active visit, unless a retrospective visit has been selected.
If there is no active visit and no selected retrospective visit, then there is no
current visit. If there is no active visit but there is a retrospective visit, then
the retrospective visit is the current visit. `currentVisitIsRetrospective` tells you
whether the current visit is a retrospective visit.

The active visit and current visit require two separate API calls. `error` contains
the error from either one, if there is an error. `isValidating` is true if either
API call is in progress. `mutate` refreshes the data from both API calls.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `patientUuid` | `string` | `undefined` | Unique patient identifier `string` |
| `representation` | `string` | `defaultVisitCustomRepresentation` | The custom representation of the visit |

#### Returns

[`VisitReturnType`](interfaces/VisitReturnType.md)

#### Defined in

[packages/framework/esm-react-utils/src/useVisit.ts:42](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useVisit.ts#L42)

___

### useVisitTypes

▸ **useVisitTypes**(): `VisitType`[]

#### Returns

`VisitType`[]

#### Defined in

[packages/framework/esm-react-utils/src/useVisitTypes.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useVisitTypes.ts#L5)

___

### userHasAccess

▸ **userHasAccess**(`requiredPrivilege`, `user`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `requiredPrivilege` | `string` \| `string`[] |
| `user` | `Object` |
| `user.privileges` | [`Privilege`](interfaces/Privilege.md)[] |
| `user.roles` | [`Role`](interfaces/Role.md)[] |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-api/src/current-user.ts:184](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/current-user.ts#L184)

___

## Breadcrumb Functions

### filterBreadcrumbs

▸ **filterBreadcrumbs**(`list`, `path`): [`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[] |
| `path` | `string` |

#### Returns

[`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/filter.ts:34](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/filter.ts#L34)

___

### getBreadcrumbs

▸ **getBreadcrumbs**(): [`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Returns

[`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/db.ts:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/db.ts#L32)

___

### getBreadcrumbsFor

▸ **getBreadcrumbsFor**(`path`): [`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`BreadcrumbRegistration`](interfaces/BreadcrumbRegistration.md)[]

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/filter.ts:54](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/filter.ts#L54)

___

### registerBreadcrumb

▸ **registerBreadcrumb**(`breadcrumb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `breadcrumb` | [`BreadcrumbSettings`](interfaces/BreadcrumbSettings.md) |

#### Returns

`void`

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/db.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/db.ts#L18)

___

### registerBreadcrumbs

▸ **registerBreadcrumbs**(`breadcrumbs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `breadcrumbs` | [`BreadcrumbSettings`](interfaces/BreadcrumbSettings.md)[] |

#### Returns

`void`

#### Defined in

[packages/framework/esm-navigation/src/breadcrumbs/db.ts:22](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/breadcrumbs/db.ts#L22)

___

## Config Functions

### defineConfigSchema

▸ **defineConfigSchema**(`moduleName`, `schema`): `void`

This defines a configuration schema for a module. The schema tells the
configuration system how the module can be configured. It specifies
what makes configuration valid or invalid.

See [Configuration System](https://o3-docs.openmrs.org/docs/configuration-system)
for more information about defining a config schema.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | Name of the module the schema is being defined for. Generally   should be the one in which the `defineConfigSchema` call takes place. |
| `schema` | [`ConfigSchema`](interfaces/ConfigSchema.md) | The config schema for the module |

#### Returns

`void`

#### Defined in

[packages/framework/esm-config/src/module-config/module-config.ts:168](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/module-config/module-config.ts#L168)

___

### defineExtensionConfigSchema

▸ **defineExtensionConfigSchema**(`extensionName`, `schema`): `void`

This defines a configuration schema for an extension. When a schema is defined
for an extension, that extension will receive the configuration corresponding
to that schema, rather than the configuration corresponding to the module
in which it is defined.

The schema tells the configuration system how the module can be configured.
It specifies what makes configuration valid or invalid.

See [Configuration System](https://o3-docs.openmrs.org/docs/configuration-system)
for more information about defining a config schema.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionName` | `string` | Name of the extension the schema is being defined for.   Should match the `name` of one of the `extensions` entries being returned   by `setupOpenMRS`. |
| `schema` | [`ConfigSchema`](interfaces/ConfigSchema.md) | The config schema for the extension |

#### Returns

`void`

#### Defined in

[packages/framework/esm-config/src/module-config/module-config.ts:244](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/module-config/module-config.ts#L244)

___

### getConfig

▸ **getConfig**<`T`\>(`moduleName`): `Promise`<`T`\>

A promise-based way to access the config as soon as it is fully loaded.
If it is already loaded, resolves the config in its present state.

This is a useful function if you need to get the config in the course
of the execution of a function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | The name of the module for which to look up the config |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/framework/esm-config/src/module-config/module-config.ts:277](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/module-config/module-config.ts#L277)

___

### provide

▸ **provide**(`config`, `sourceName?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`Config`](interfaces/Config.md) | `undefined` |
| `sourceName` | `string` | `'provided'` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-config/src/module-config/module-config.ts:261](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/module-config/module-config.ts#L261)

___

### useConfig

▸ **useConfig**<`T`\>(`options?`): `T`

Use this React Hook to obtain your module's configuration.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`UseConfigOptions`](interfaces/UseConfigOptions.md) | Additional options that can be passed to useConfig() |

#### Returns

`T`

#### Defined in

[packages/framework/esm-react-utils/src/useConfig.ts:145](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useConfig.ts#L145)

___

## Config Validation Functions

### inRange

▸ **inRange**(`min`, `max`): [`Validator`](API.md#validator)

Verifies that the value is between the provided minimum and maximum

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | Minimum acceptable value |
| `max` | `number` | Maximum acceptable value |

#### Returns

[`Validator`](API.md#validator)

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L10)

___

### isUrl

▸ **isUrl**(`value`): `string` \| `void`

Verifies that a string contains only the default URL template parameters.

**`category`** Navigation

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string` \| `void`

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:52](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L52)

___

### isUrlWithTemplateParameters

▸ **isUrlWithTemplateParameters**(`allowedTemplateParameters`): [`Validator`](API.md#validator)

Verifies that a string contains only the default URL template
parameters, plus any specified in `allowedTemplateParameters`.

**`category`** Navigation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedTemplateParameters` | `string`[] \| readonly `string`[] | To be added to `openmrsBase` and `openmrsSpaBase` |

#### Returns

[`Validator`](API.md#validator)

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:21](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L21)

___

### oneOf

▸ **oneOf**(`allowedValues`): [`Validator`](API.md#validator)

Verifies that the value is one of the allowed options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `allowedValues` | `any`[] \| readonly `any`[] | The list of allowable values |

#### Returns

[`Validator`](API.md#validator)

#### Defined in

[packages/framework/esm-config/src/validators/validators.ts:58](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validators.ts#L58)

___

### validator

▸ **validator**(`validationFunction`, `message`): [`Validator`](API.md#validator)

Constructs a custom validator.

### Example

```typescript
{
  foo: {
    _default: 0,
    _validators: [
      validator(val => val >= 0, "Must not be negative.")
    ]
  }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validationFunction` | [`ValidatorFunction`](API.md#validatorfunction) | Takes the configured value as input. Returns true    if it is valid, false otherwise. |
| `message` | `string` \| (`value`: `any`) => `string` | A string message that explains why the value is invalid. Can    also be a function that takes the value as input and returns a string. |

#### Returns

[`Validator`](API.md#validator)

A validator ready for use in a config schema

#### Defined in

[packages/framework/esm-config/src/validators/validator.ts:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-config/src/validators/validator.ts#L25)

___

## Context Functions

### OpenmrsAppContext

▸ **OpenmrsAppContext**<`T`\>(`__namedParameters`): ``null``

OpenmrsAppContext is a simple React component meant to function similarly to React's Context,
but built on top of the OpenmrsAppContext.

**`example`**
```ts
   <OpenmrsAppContext namespace="something" value={{ key: "1234" }} />
```

**Notes on usage:** Unlike a proper React context where the value is limited to the subtree under the
context component, the `OpenmrsAppContext` is inherently global in scope. That means that _all applications_
will see the values that you set for the namespace if they load the value of the namespace.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`OpenmrsAppContextProps`](interfaces/OpenmrsAppContextProps.md)<`T`\> |

#### Returns

``null``

#### Defined in

[packages/framework/esm-react-utils/src/OpenmrsContext.ts:24](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/OpenmrsContext.ts#L24)

___

### getContext

▸ **getContext**<`T`\>(`namespace`): `Readonly`<`T`\> \| ``null``

Returns an _immutable_ version of the state of the namespace as it is currently

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object` = {} | The type of the value stored in the namespace |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | The namespace to load properties from |

#### Returns

`Readonly`<`T`\> \| ``null``

#### Defined in

[packages/framework/esm-context/src/context.ts:54](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L54)

___

### registerContext

▸ **registerContext**<`T`\>(`namespace`, `initialValue?`): `void`

Used by callers to register a new namespace in the application context. Attempting to register
an already-registered namespace will display a warning and make no modifications to the state.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = {} |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `namespace` | `string` | `undefined` | the namespace to register |
| `initialValue` | `T` | `nothing` | the initial value of the namespace |

#### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:29](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L29)

___

### subscribeToContext

▸ **subscribeToContext**<`T`\>(`namespace`, `callback`): () => `void`

Subscribes to updates of a given namespace. Note that the returned object is immutable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | the namespace to subscribe to |
| `callback` | [`ContextCallback`](API.md#contextcallback)<`T`\> | a function invoked with the current context whenever |

#### Returns

`fn`

A function to unsubscribe from the context

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:98](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L98)

___

### unregisterContext

▸ **unregisterContext**(`namespace`): `void`

Used by caller to unregister a namespace in the application context. Unregistering a namespace
will remove the namespace and all associated data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:45](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L45)

___

### updateContext

▸ **updateContext**<`T`\>(`namespace`, `update`): `void`

Updates a namespace in the global context. If the namespace does not exist, it is registered.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `update` | (`state`: `T`) => `T` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-context/src/context.ts:78](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-context/src/context.ts#L78)

___

### useAppContext

▸ **useAppContext**<`T`\>(`namespace`): `Readonly`<`T`\> \| `undefined`

This hook is used to access a namespace within the overall AppContext, so that a component can
use any shared contextual values. A selector may be provided to further restrict the properties
returned from the namespace.

**`example`**
```ts
// load a full namespace
const patientContext = useAppContext<PatientContext>('patient');
```

**`example`**
```ts
// loads part of a namespace
const patientName = useAppContext<PatientContext, string | undefined>('patient', (state) => state.display);
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object` = {} | The type of the value stored in the namespace |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | The namespace to load properties from |

#### Returns

`Readonly`<`T`\> \| `undefined`

#### Defined in

[packages/framework/esm-react-utils/src/useAppContext.ts:26](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAppContext.ts#L26)

___

### useDefineAppContext

▸ **useDefineAppContext**<`T`\>(`namespace`, `value?`): (`update`: (`state`: `T`) => `T`) => `void`

This hook is used to register a namespace in the AppContext. The component that registers the
namespace is responsible for updating the value associated with the namespace. The namespace
will be automatically removed when the component using this hook is unmounted.

**`example`**
```ts
const { data: patient } = useSWR(`/ws/rest/v1/patient/${patientUuid}`, openmrsFetch);
useDefineAppContext<PatientContext>('patient', patient ?? null);
```

**`example`**
```ts
const { data: patient } = useSWR(`/ws/rest/v1/patient/${patientUuid}`, openmrsFetch);
const updatePatient = useDefineAppContext<PatientContext>('patient', patient ?? null);
updatePatient((patient) => {
 patient.name = 'Hector';
 return patient;
})
```

Note that the AppContext does not allow the storing of undefined values in a namespace. Use `null`
instead.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object` | The type of the value of the namespace |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | The name of the namespace in the application context. Note that the namespace  must be unique among currently registered namespaces in the application context. |
| `value?` | `T` | The value to associate with this namespace. Updating the value property will update   the namespace value. |

#### Returns

`fn`

A function which can be used to update the state associated with the namespace

▸ (`update`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `update` | (`state`: `T`) => `T` |

##### Returns

`void`

#### Defined in

[packages/framework/esm-react-utils/src/useDefineAppContext.ts:37](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useDefineAppContext.ts#L37)

___

## Date and Time Functions

### convertToLocaleCalendar

▸ **convertToLocaleCalendar**(`date`, `locale`): `CalendarDate` \| `CalendarDateTime` \| `ZonedDateTime`

Converts a calendar date to the equivalent locale calendar date.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `CalendarDate` \| `CalendarDateTime` \| `ZonedDateTime` |
| `locale` | `string` \| `Locale` |

#### Returns

`CalendarDate` \| `CalendarDateTime` \| `ZonedDateTime`

CalendarDate

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:144

___

### formatDate

▸ **formatDate**(`date`, `options?`): `string`

Formats the input date according to the current locale and the
given options.

Default options:
 - mode: "standard",
 - time: "for today",
 - day: true,
 - month: true,
 - year: true
 - noToday: false

If the date is today then "Today" is produced (in the locale language).
This behavior can be disabled with `noToday: true`.

When time is included, it is appended with a comma and a space. This
agrees with the output of `Date.prototype.toLocaleString` for *most*
locales.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `options?` | `Partial`<[`FormatDateOptions`](API.md#formatdateoptions)\> |

#### Returns

`string`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:124

___

### formatDatetime

▸ **formatDatetime**(`date`, `options?`): `string`

Formats the input into a string showing the date and time, according
to the current locale. The `mode` parameter is as described for
`formatDate`.

This is created by concatenating the results of `formatDate`
and `formatTime` with a comma and space. This agrees with the
output of `Date.prototype.toLocaleString` for *most* locales.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `options?` | `Partial`<`Omit`<[`FormatDateOptions`](API.md#formatdateoptions), ``"time"``\>\> |

#### Returns

`string`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:139

___

### formatPartialDate

▸ **formatPartialDate**(`dateString`, `options?`): `string` \| ``null``

Formats the string representing a date, including partial representations of dates, according to the current
locale and the given options.

Default options:
 - mode: "standard",
 - time: "for today",
 - day: true,
 - month: true,
 - year: true
 - noToday: false

If the date is today then "Today" is produced (in the locale language).
This behavior can be disabled with `noToday: true`.

When time is included, it is appended with a comma and a space. This
agrees with the output of `Date.prototype.toLocaleString` for *most*
locales.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateString` | `string` |
| `options?` | `Partial`<[`FormatDateOptions`](API.md#formatdateoptions)\> |

#### Returns

`string` \| ``null``

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:104

___

### formatTime

▸ **formatTime**(`date`): `string`

Formats the input as a time, according to the current locale.
12-hour or 24-hour clock depends on locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`string`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:129

___

### getDefaultCalendar

▸ **getDefaultCalendar**(`locale`): `CalendarIdentifier` \| `undefined`

Retrieves the default calendar for the specified locale if any.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `undefined` \| `string` \| `Locale` | the locale to look-up |

#### Returns

`CalendarIdentifier` \| `undefined`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:48

___

### isOmrsDateStrict

▸ **isOmrsDateStrict**(`omrsPayloadString`): `boolean`

This function checks whether a date string is the OpenMRS ISO format.
The format should be YYYY-MM-DDTHH:mm:ss.SSSZZ

#### Parameters

| Name | Type |
| :------ | :------ |
| `omrsPayloadString` | `string` |

#### Returns

`boolean`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:11

___

### isOmrsDateToday

▸ **isOmrsDateToday**(`date`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) | Checks if the provided date is today. |

#### Returns

`boolean`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:16

___

### parseDate

▸ **parseDate**(`dateString`): `Date`

Utility function to parse an arbitrary string into a date.
Uses `dayjs(dateString)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateString` | `string` |

#### Returns

`Date`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:30

___

### registerDefaultCalendar

▸ **registerDefaultCalendar**(`locale`, `calendar`): `void`

Provides the name of the calendar to associate, as a default, with the given base locale.

**`example`**
```
registerDefaultCalendar('en', 'buddhist') // sets the default calendar for the 'en' locale to Buddhist.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `locale` | `string` | the locale to register this calendar for |
| `calendar` | `CalendarIdentifier` | the calendar to use for this registration |

#### Returns

`void`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:42

___

### toDateObjectStrict

▸ **toDateObjectStrict**(`omrsDateString`): `Date` \| ``null``

Converts the object to a date object if it is an OpenMRS ISO date time string.
Otherwise returns null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `omrsDateString` | `string` |

#### Returns

`Date` \| ``null``

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:21

___

### toOmrsIsoString

▸ **toOmrsIsoString**(`date`, `toUTC?`): `string`

Formats the input to OpenMRS ISO format: "YYYY-MM-DDTHH:mm:ss.SSSZZ".

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`DateInput`](API.md#dateinput) |
| `toUTC?` | `boolean` |

#### Returns

`string`

#### Defined in

packages/framework/esm-utils/dist/dates/date-util.d.ts:25

___

## Dynamic Loading Functions

### importDynamic

▸ **importDynamic**<`T`\>(`jsPackage`, `share?`, `options?`): `Promise`<`T`\>

Loads the named export from a named package. This might be used like:

```js
const { someComponent } = importDynamic("@openmrs/esm-template-app")
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `jsPackage` | `string` | `undefined` | The package to load the export from. |
| `share` | `string` | `'./start'` | Indicates the name of the shared module; this is an advanced feature if the package you are loading   doesn't use the default OpenMRS shared module name "./start". |
| `options?` | `Object` | `undefined` | Additional options to control loading this script. |
| `options.importMap?` | [`ImportMap`](interfaces/ImportMap.md) | `undefined` |  |
| `options.maxLoadingTime?` | `number` | `undefined` |  |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/framework/esm-dynamic-loading/src/dynamic-loading.ts:37](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-dynamic-loading/src/dynamic-loading.ts#L37)

___

## Extension Functions

### ExtensionSlot

▸ **ExtensionSlot**(`__namedParameters`): `Element`

An [extension slot](https://o3-docs.openmrs.org/docs/extension-system).
A place with a name. Extensions that get connected to that name
will be rendered into this.

**`example`**
Passing a react node as children

```tsx
<ExtensionSlot name="Foo">
  <div style={{ width: 10rem }}>
    <Extension />
  </div>
</ExtensionSlot>
```

**`example`**
Passing a function as children

```tsx
<ExtensionSlot name="Bar">
  {(extension) => (
    <h1>{extension.name}</h1>
    <div style={{ color: extension.meta.color }}>
      <Extension />
    </div>
  )}
</ExtensionSlot>
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ExtensionSlotProps`](API.md#extensionslotprops) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-react-utils/src/ExtensionSlot.tsx:81](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/ExtensionSlot.tsx#L81)

___

### attach

▸ **attach**(`slotName`, `extensionId`): `void`

Attach an extension to an extension slot.

This will cause the extension to be rendered into the specified
extension slot, unless it is removed by configuration. Using
`attach` is an alternative to specifying the `slot` or `slots`
in the extension declaration.

It is particularly useful when creating a slot into which
you want to render an existing extension. This enables you
to do so without modifying the extension's declaration, which
may be impractical or inappropriate, for example if you are
writing a module for a specific implementation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | a name uniquely identifying the slot |
| `extensionId` | `string` | an extension name, with an optional #-suffix    to distinguish it from other instances of the same extension    attached to the same slot. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:215](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L215)

___

### detach

▸ **detach**(`extensionSlotName`, `extensionId`): `void`

**`deprecated`** Avoid using this. Extension attachments should be considered declarative.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |
| `extensionId` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:248](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L248)

___

### detachAll

▸ **detachAll**(`extensionSlotName`): `void`

**`deprecated`** Avoid using this. Extension attachments should be considered declarative.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:272](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L272)

___

### getAssignedExtensions

▸ **getAssignedExtensions**(`slotName`): [`AssignedExtension`](interfaces/AssignedExtension.md)[]

Gets the list of extensions assigned to a given slot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | The slot to load the assigned extensions for |

#### Returns

[`AssignedExtension`](interfaces/AssignedExtension.md)[]

An array of extensions assigned to the named slot

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:399](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L399)

___

### getExtensionNameFromId

▸ **getExtensionNameFromId**(`extensionId`): `string`

Given an extension ID, which is a string uniquely identifying
an instance of an extension within an extension slot, this
returns the extension name.

**`example`**
```js
getExtensionNameFromId("foo#bar")
 --> "foo"
getExtensionNameFromId("baz")
 --> "baz"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionId` | `string` |

#### Returns

`string`

#### Defined in

[packages/framework/esm-extensions/src/extensions.ts:163](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/extensions.ts#L163)

___

### getExtensionStore

▸ **getExtensionStore**(): `StoreApi`<[`ExtensionStore`](interfaces/ExtensionStore.md)\>

This returns a store that modules can use to get information about the
state of the extension system.

#### Returns

`StoreApi`<[`ExtensionStore`](interfaces/ExtensionStore.md)\>

#### Defined in

[packages/framework/esm-extensions/src/store.ts:125](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/store.ts#L125)

___

### renderExtension

▸ **renderExtension**(`domElement`, `extensionSlotName`, `extensionSlotModuleName`, `extensionId`, `renderFunction?`, `additionalProps?`): `Promise`<`Parcel` \| ``null``\>

Mounts into a DOM node (representing an extension slot)
a lazy-loaded component from *any* frontend module
that registered an extension component for this slot.

#### Parameters

| Name | Type |
| :------ | :------ |
| `domElement` | `HTMLElement` |
| `extensionSlotName` | `string` |
| `extensionSlotModuleName` | `string` |
| `extensionId` | `string` |
| `renderFunction` | (`application`: `ParcelConfig`<`CustomProps`\>) => `ParcelConfig`<`CustomProps`\> |
| `additionalProps` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`Parcel` \| ``null``\>

#### Defined in

[packages/framework/esm-extensions/src/render.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/render.ts#L18)

___

### useAssignedExtensionIds

▸ **useAssignedExtensionIds**(`slotName`): `string`[]

Gets the assigned extension ids for a given extension slot name.
Does not consider if offline or online.

**`deprecated`** Use `useAssignedExtensions`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | The name of the slot to get the assigned IDs for. |

#### Returns

`string`[]

#### Defined in

[packages/framework/esm-react-utils/src/useAssignedExtensionIds.ts:13](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAssignedExtensionIds.ts#L13)

___

### useAssignedExtensions

▸ **useAssignedExtensions**(`slotName`): `AssignedExtension`[]

Gets the assigned extensions for a given extension slot name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | The name of the slot to get the assigned extensions for. |

#### Returns

`AssignedExtension`[]

#### Defined in

[packages/framework/esm-react-utils/src/useAssignedExtensions.ts:8](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAssignedExtensions.ts#L8)

___

### useConnectedExtensions

▸ **useConnectedExtensions**(`slotName`): `ConnectedExtension`[]

Gets the assigned extension for a given extension slot name.

**`deprecated`** Use useAssignedExtensions instead

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | `string` | The name of the slot to get the assigned extensions for. |

#### Returns

`ConnectedExtension`[]

#### Defined in

[packages/framework/esm-react-utils/src/useConnectedExtensions.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useConnectedExtensions.ts#L10)

___

### useExtensionSlotMeta

▸ **useExtensionSlotMeta**<`T`\>(`extensionSlotName`): `Object`

Extract meta data from all extension for a given extension slot.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `ExtensionMeta` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionSlotName` | `string` |

#### Returns

`Object`

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionSlotMeta.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionSlotMeta.ts#L10)

___

### useExtensionSlotStore

▸ **useExtensionSlotStore**(`slot`): `ExtensionSlotState`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slot` | `string` |

#### Returns

`ExtensionSlotState`

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionSlotStore.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionSlotStore.ts#L5)

___

### useExtensionStore

▸ **useExtensionStore**(): `T`

#### Returns

`T`

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionStore.ts#L5)

▸ **useExtensionStore**<`A`\>(`actions`): `T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Actions`](API.md#actions)<`ExtensionStore`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `A` |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionStore.ts#L5)

▸ **useExtensionStore**<`A`\>(`actions?`): `T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Actions`](API.md#actions)<`ExtensionStore`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions?` | `A` |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Defined in

[packages/framework/esm-react-utils/src/useExtensionStore.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useExtensionStore.ts#L5)

___

### useRenderableExtensions

▸ **useRenderableExtensions**(`name`): `React.FC`<`Pick`<[`ExtensionProps`](API.md#extensionprops), ``"state"``\>\>[]

This is an advanced hook for use-cases where its useful to use the extension system,
but not the `ExtensionSlot` component's rendering of extensions. Use of this hook
should be avoided if possible.

Functionally, this hook is very similar to the `ExtensionSlot` component, but whereas
an `ExtensionSlot` renders a DOM tree of extensions bound to the slot, this hook simply
returns the extensions as an array of React components that can be wired into a component
however makes sense.

**`example`**
```ts
const extensions = useRenderableExtensions('my-extension-slot');
return (
 <>
   {extensions.map((Ext, index) => (
     <React.Fragment key={index}>
       <Ext state={{key: 'value'}} />
     </React.Fragment>
   ))}
 </>
)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the extension slot |

#### Returns

`React.FC`<`Pick`<[`ExtensionProps`](API.md#extensionprops), ``"state"``\>\>[]

#### Defined in

[packages/framework/esm-react-utils/src/useRenderableExtensions.tsx:31](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useRenderableExtensions.tsx#L31)

___

## Feature Flags Functions

### getFeatureFlag

▸ **getFeatureFlag**(`flagName`): `boolean`

Use this function to access the current value of the feature flag

If you are using React, use `useFeatureFlag` instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `flagName` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-feature-flags/src/feature-flags.ts:87](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-feature-flags/src/feature-flags.ts#L87)

___

### registerFeatureFlag

▸ **registerFeatureFlag**(`flagName`, `label`, `description`): `void`

This function creates a feature flag. Call it in top-level code anywhere. It will
not reset whether the flag is enabled or not, so it's safe to call it multiple times.
Once a feature flag is created, it will appear with a toggle in the Implementer Tools.
It can then be used to turn on or off features in the code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `flagName` | `string` | A code-friendly name for the flag, which will be used to reference it in code |
| `label` | `string` | A human-friendly name which will be displayed in the Implementer Tools |
| `description` | `string` | An explanation of what the flag does, which will be displayed in the Implementer Tools |

#### Returns

`void`

#### Defined in

[packages/framework/esm-feature-flags/src/feature-flags.ts:54](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-feature-flags/src/feature-flags.ts#L54)

___

### useFeatureFlag

▸ **useFeatureFlag**(`flagName`): `boolean`

Use this function to tell whether a feature flag is toggled on or off.

Example:

```tsx
import { useFeatureFlag } from "@openmrs/esm-react-utils";

export function MyComponent() {
 const isMyFeatureFlagOn = useFeatureFlag("my-feature-flag");
 return <>{isMyFeatureFlagOn && <ExperimentalFeature />}</>;
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `flagName` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-react-utils/src/useFeatureFlag.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useFeatureFlag.ts#L18)

___

## Framework Functions

### getAsyncExtensionLifecycle

▸ **getAsyncExtensionLifecycle**<`T`\>(`lazy`, `options`): () => `Promise`<`ReactAppOrParcel`<`T`\>\>

**`deprecated`** Use getAsyncLifecycle instead.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lazy` | () => `Promise`<{ `default`: `ComponentType`<`T`\>  }\> |
| `options` | `ComponentDecoratorOptions` |

#### Returns

`fn`

▸ (): `Promise`<`ReactAppOrParcel`<`T`\>\>

##### Returns

`Promise`<`ReactAppOrParcel`<`T`\>\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/getLifecycle.ts#L32)

___

### getAsyncLifecycle

▸ **getAsyncLifecycle**<`T`\>(`lazy`, `options`): () => `Promise`<`ReactAppOrParcel`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lazy` | () => `Promise`<{ `default`: `ComponentType`<`T`\>  }\> |
| `options` | `ComponentDecoratorOptions` |

#### Returns

`fn`

▸ (): `Promise`<`ReactAppOrParcel`<`T`\>\>

##### Returns

`Promise`<`ReactAppOrParcel`<`T`\>\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/getLifecycle.ts#L18)

___

### getLifecycle

▸ **getLifecycle**<`T`\>(`Component`, `options`): `ReactAppOrParcel`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `ComponentType`<`T`\> |
| `options` | `ComponentDecoratorOptions` |

#### Returns

`ReactAppOrParcel`<`T`\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:10](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/getLifecycle.ts#L10)

___

### getSyncLifecycle

▸ **getSyncLifecycle**<`T`\>(`Component`, `options`): () => `Promise`<`ReactAppOrParcel`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `ComponentType`<`T`\> |
| `options` | `ComponentDecoratorOptions` |

#### Returns

`fn`

▸ (): `Promise`<`ReactAppOrParcel`<`T`\>\>

##### Returns

`Promise`<`ReactAppOrParcel`<`T`\>\>

#### Defined in

[packages/framework/esm-react-utils/src/getLifecycle.ts:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/getLifecycle.ts#L25)

___

## Navigation Functions

### ConfigurableLink

▸ **ConfigurableLink**(`__namedParameters`): `Element`

A React link component which calls [navigate](API.md#navigate) when clicked

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PropsWithChildren`<[`ConfigurableLinkProps`](interfaces/ConfigurableLinkProps.md)\> |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-react-utils/src/ConfigurableLink.tsx:52](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/ConfigurableLink.tsx#L52)

___

### getHistory

▸ **getHistory**(): `string`[]

Returns a list of URLs representing the history of the current window session.

#### Returns

`string`[]

#### Defined in

[packages/framework/esm-navigation/src/history/history.ts:47](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/history/history.ts#L47)

___

### goBackInHistory

▸ **goBackInHistory**(`toUrl:`): `void`

Rolls back the history to the specified point and navigates to that URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toUrl:` | `Object` | The URL in the history to navigate to. History after that index will be deleted. If the URL is not found in the history, an error will be thrown. |
| `toUrl:.toUrl` | `string` |  |

#### Returns

`void`

#### Defined in

[packages/framework/esm-navigation/src/history/history.ts:58](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/history/history.ts#L58)

___

### interpolateString

▸ **interpolateString**(`template`, `params`): `string`

Interpolates values of `params` into the `template` string.

Example usage:
```js
interpolateString("test ${one} ${two} 3", {
   one: "1",
   two: "2",
}); // will return "test 1 2 3"
interpolateString("test ok", { one: "1", two: "2" }) // will return "test ok"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `string` | With optional params wrapped in `${ }` |
| `params` | `Object` | Values to interpolate into the string template |

#### Returns

`string`

#### Defined in

[packages/framework/esm-navigation/src/navigation/interpolate-string.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/navigation/interpolate-string.ts#L60)

___

### interpolateUrl

▸ **interpolateUrl**(`template`, `additionalParams?`): `string`

Interpolates a string with openmrsBase and openmrsSpaBase.

Useful for accepting `${openmrsBase}` or `${openmrsSpaBase}`plus additional template
parameters in configurable URLs.

Example usage:
```js
interpolateUrl("test ${openmrsBase} ${openmrsSpaBase} ok");
   // will return "test /openmrs /openmrs/spa ok"

interpolateUrl("${openmrsSpaBase}/patient/${patientUuid}", {
   patientUuid: "4fcb7185-c6c9-450f-8828-ccae9436bd82",
}); // will return "/openmrs/spa/patient/4fcb7185-c6c9-450f-8828-ccae9436bd82"
```

This can be used in conjunction with the `navigate` function like so
```js
navigate({
 to: interpolateUrl(
   "${openmrsSpaBase}/patient/${patientUuid}",
   { patientUuid: patient.uuid }
 )
}); // will navigate to "/openmrs/spa/patient/4fcb7185-c6c9-450f-8828-ccae9436bd82"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `string` | A string to interpolate |
| `additionalParams?` | `Object` | Additional values to interpolate into the string template |

#### Returns

`string`

#### Defined in

[packages/framework/esm-navigation/src/navigation/interpolate-string.ts:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/navigation/interpolate-string.ts#L36)

___

### navigate

▸ **navigate**(`to`): `void`

Calls `location.assign` for non-SPA paths and [navigateToUrl](https://single-spa.js.org/docs/api/#navigatetourl) for SPA paths

#### Example usage:
```js
@example
const config = useConfig();
const submitHandler = () => {
  navigate({ to: config.links.submitSuccess });
};
```

#### Example behavior::
```js
@example
navigate({ to: "/some/path" }); // => window.location.assign("/some/path")
navigate({ to: "https://single-spa.js.org/" }); // => window.location.assign("https://single-spa.js.org/")
navigate({ to: "${openmrsBase}/some/path" }); // => window.location.assign("/openmrs/some/path")
navigate({ to: "/openmrs/spa/foo/page" }); // => navigateToUrl("/openmrs/spa/foo/page")
navigate({ to: "${openmrsSpaBase}/bar/page" }); // => navigateToUrl("/openmrs/spa/bar/page")
navigate({ to: "/${openmrsSpaBase}/baz/page" }) // => navigateToUrl("/openmrs/spa/baz/page")
navigate({ to: "https://o3.openmrs.org/${openmrsSpaBase}/qux/page" }); // => navigateToUrl("/openmrs/spa/qux/page")
  if `window.location.origin` == "https://o3.openmrs.org", else will use window.location.assign
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | [`NavigateOptions`](interfaces/NavigateOptions.md) | The target path or URL. Supports templating with 'openmrsBase', 'openmrsSpaBase', and any additional template parameters defined in `templateParams`. For example, `${openmrsSpaBase}/home` will resolve to `/openmrs/spa/home` for implementations using the standard OpenMRS and SPA base paths. If `templateParams` contains `{ foo: "bar" }`, then the URL `${openmrsBase}/${foo}` will become `/openmrs/bar`. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-navigation/src/navigation/navigate.ts:49](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-navigation/src/navigation/navigate.ts#L49)

___

## Offline Functions

### beginEditSynchronizationItem

▸ **beginEditSynchronizationItem**(`id`): `Promise`<`void`\>

Triggers an edit flow for the given synchronization item.
If this is not possible, throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the synchronization item to be edited. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:330](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L330)

___

### canBeginEditSynchronizationItemsOfType

▸ **canBeginEditSynchronizationItemsOfType**(`type`): `boolean`

Returns whether editing synchronization items of the given type is supported by the currently
registered synchronization handlers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The identifying type of the synchronization item which should be edited. |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-offline/src/sync.ts:320](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L320)

___

### deleteSynchronizationItem

▸ **deleteSynchronizationItem**(`id`): `Promise`<`void`\>

Deletes a queued up sync item with the given ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the synchronization item to be deleted. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:350](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L350)

___

### generateOfflineUuid

▸ **generateOfflineUuid**(): `string`

Generates a UUID-like string which is used for uniquely identifying objects while offline.

#### Returns

`string`

#### Defined in

[packages/framework/esm-offline/src/uuid-support.ts:7](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/uuid-support.ts#L7)

___

### getCurrentOfflineMode

▸ **getCurrentOfflineMode**(): [`OfflineModeResult`](interfaces/OfflineModeResult.md)

#### Returns

[`OfflineModeResult`](interfaces/OfflineModeResult.md)

#### Defined in

[packages/framework/esm-offline/src/mode.ts:45](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/mode.ts#L45)

___

### getDynamicOfflineDataEntries

▸ **getDynamicOfflineDataEntries**<`T`\>(`type?`): `Promise`<`T`[]\>

Returns all [DynamicOfflineData](interfaces/DynamicOfflineData.md) entries which registered for the currently logged in user.
Optionally returns only entries of a given type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DynamicOfflineData`](interfaces/DynamicOfflineData.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `string` | The type of the entries to be returned. If `undefined`, returns all types. |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:128](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L128)

___

### getDynamicOfflineDataEntriesFor

▸ **getDynamicOfflineDataEntriesFor**<`T`\>(`userId`, `type?`): `Promise`<`T`[]\>

Returns all [DynamicOfflineData](interfaces/DynamicOfflineData.md) entries which registered for the given user.
Optionally returns only entries of a given type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DynamicOfflineData`](interfaces/DynamicOfflineData.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The ID of the user whose entries are to be retrieved. |
| `type?` | `string` | The type of the entries to be returned. If `undefined`, returns all types. |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:139](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L139)

___

### getDynamicOfflineDataHandlers

▸ **getDynamicOfflineDataHandlers**(): [`DynamicOfflineDataHandler`](interfaces/DynamicOfflineDataHandler.md)[]

Returns all handlers which have been setup using the [setupDynamicOfflineDataHandler](API.md#setupdynamicofflinedatahandler) function.

#### Returns

[`DynamicOfflineDataHandler`](interfaces/DynamicOfflineDataHandler.md)[]

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:104](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L104)

___

### getFullSynchronizationItems

▸ **getFullSynchronizationItems**<`T`\>(`type?`): `Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\>[]\>

Returns all currently queued up sync items of the currently signed in user.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `string` | The identifying type of the synchronization items to be returned. |

#### Returns

`Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\>[]\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:302](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L302)

___

### getFullSynchronizationItemsFor

▸ **getFullSynchronizationItemsFor**<`T`\>(`userId`, `type?`): `Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\>[]\>

Returns all currently queued up sync items of a given user.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The ID of the user whose synchronization items should be returned. |
| `type?` | `string` | The identifying type of the synchronization items to be returned.. |

#### Returns

`Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\>[]\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:281](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L281)

___

### getOfflinePatientDataStore

▸ **getOfflinePatientDataStore**(): `StoreApi`<[`OfflinePatientDataSyncStore`](interfaces/OfflinePatientDataSyncStore.md)\>

**`deprecated`** Will be removed once all modules have been migrated to the new dynamic offline data API.

#### Returns

`StoreApi`<[`OfflinePatientDataSyncStore`](interfaces/OfflinePatientDataSyncStore.md)\>

#### Defined in

[packages/framework/esm-offline/src/offline-patient-data.ts:39](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/offline-patient-data.ts#L39)

___

### getSynchronizationItem

▸ **getSynchronizationItem**<`T`\>(`id`): `Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\> \| `undefined`\>

Returns a queued sync item with the given ID or `undefined` if no such item exists.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the requested sync item. |

#### Returns

`Promise`<[`SyncItem`](interfaces/SyncItem.md)<`T`\> \| `undefined`\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:311](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L311)

___

### getSynchronizationItems

▸ **getSynchronizationItems**<`T`\>(`type?`): `Promise`<`T`[]\>

Returns the content of all currently queued up sync items of the currently signed in user.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `string` | The identifying type of the synchronization items to be returned. |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:293](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L293)

___

### isOfflineUuid

▸ **isOfflineUuid**(`uuid`): `boolean`

Checks whether the given string has the format of an offline UUID generated by [generateOfflineUuid](API.md#generateofflineuuid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-offline/src/uuid-support.ts:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/uuid-support.ts#L12)

___

### messageOmrsServiceWorker

▸ **messageOmrsServiceWorker**(`message`): `Promise`<[`MessageServiceWorkerResult`](interfaces/MessageServiceWorkerResult.md)<`any`\>\>

Sends the specified message to the application's service worker.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`KnownOmrsServiceWorkerMessages`](API.md#knownomrsserviceworkermessages) | The message to be sent. |

#### Returns

`Promise`<[`MessageServiceWorkerResult`](interfaces/MessageServiceWorkerResult.md)<`any`\>\>

A promise which completes when the message has been successfully processed by the Service Worker.

#### Defined in

[packages/framework/esm-offline/src/service-worker-messaging.ts:11](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/service-worker-messaging.ts#L11)

___

### putDynamicOfflineData

▸ **putDynamicOfflineData**(`type`, `identifier`): `Promise`<`void`\>

Declares that dynamic offline data of the given [type](interfaces/FetchResponse.md#type) with the given [identifier](interfaces/Session.md#identifier)
should be made available offline for the currently logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:157](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L157)

___

### putDynamicOfflineDataFor

▸ **putDynamicOfflineDataFor**(`userId`, `type`, `identifier`): `Promise`<`void`\>

Declares that dynamic offline data of the given [type](interfaces/FetchResponse.md#type) with the given [identifier](interfaces/Session.md#identifier)
should be made available offline for the user with the given ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The ID of the user for whom the dynamic offline data should be made available. |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:169](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L169)

___

### queueSynchronizationItem

▸ **queueSynchronizationItem**<`T`\>(`type`, `content`, `descriptor?`): `Promise`<`number`\>

Enqueues a new item in the sync queue and associates the item with the currently signed in user.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The identifying type of the synchronization item. |
| `content` | `T` | The actual data to be synchronized. |
| `descriptor?` | [`QueueItemDescriptor`](interfaces/QueueItemDescriptor.md) | An optional descriptor providing additional metadata about the sync item. |

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/framework/esm-offline/src/sync.ts:261](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L261)

___

### registerOfflinePatientHandler

▸ **registerOfflinePatientHandler**(`identifier`, `handler`): `void`

**`deprecated`** Will be removed once all modules have been migrated to the new dynamic offline data API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | `string` |
| `handler` | [`OfflinePatientDataSyncHandler`](interfaces/OfflinePatientDataSyncHandler.md) |

#### Returns

`void`

#### Defined in

[packages/framework/esm-offline/src/offline-patient-data.ts:45](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/offline-patient-data.ts#L45)

___

### removeDynamicOfflineData

▸ **removeDynamicOfflineData**(`type`, `identifier`): `Promise`<`void`\>

Declares that dynamic offline data of the given [type](interfaces/FetchResponse.md#type) with the given [identifier](interfaces/Session.md#identifier)
no longer needs to be available offline for the currently logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:201](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L201)

___

### removeDynamicOfflineDataFor

▸ **removeDynamicOfflineDataFor**(`userId`, `type`, `identifier`): `Promise`<`void`\>

Declares that dynamic offline data of the given [type](interfaces/FetchResponse.md#type) with the given [identifier](interfaces/Session.md#identifier)
no longer needs to be available offline for the user with the given ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The ID of the user who doesn't require the specified offline data. |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:213](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L213)

___

### setupDynamicOfflineDataHandler

▸ **setupDynamicOfflineDataHandler**(`handler`): `void`

Sets up a handler for synchronizing dynamic offline data.
See [DynamicOfflineDataHandler](interfaces/DynamicOfflineDataHandler.md) for details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | [`DynamicOfflineDataHandler`](interfaces/DynamicOfflineDataHandler.md) | The handler to be setup. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:113](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L113)

___

### setupOfflineSync

▸ **setupOfflineSync**<`T`\>(`type`, `dependsOn`, `process`, `options?`): `void`

Registers a new synchronization handler which is able to synchronize data of a specific type.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The identifying type of the synchronization items which can be handled by this handler. |
| `dependsOn` | `string`[] | An array of other sync item types which must be synchronized before this handler   can synchronize its own data. Items of these types are effectively dependencies of the data   synchronized by this handler. |
| `process` | `ProcessSyncItem`<`T`\> | A function which, when invoked, performs the actual client-server synchronization of the given   `item` (which is the actual data to be synchronized). |
| `options` | `SetupOfflineSyncOptions`<`T`\> | Additional options which can optionally be provided when setting up a synchronization callback   for a specific synchronization item type. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-offline/src/sync.ts:365](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/sync.ts#L365)

___

### subscribeConnectivity

▸ **subscribeConnectivity**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`ev`: [`ConnectivityChangedEvent`](interfaces/ConnectivityChangedEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** Offline

##### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:9

___

### subscribeConnectivityChanged

▸ **subscribeConnectivityChanged**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`ev`: [`ConnectivityChangedEvent`](interfaces/ConnectivityChangedEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** Offline

##### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:7

___

### subscribePrecacheStaticDependencies

▸ **subscribePrecacheStaticDependencies**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`PrecacheStaticDependenciesEvent`](interfaces/PrecacheStaticDependenciesEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** Offline

##### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:14

___

### syncAllDynamicOfflineData

▸ **syncAllDynamicOfflineData**(`type`, `abortSignal?`): `Promise`<`void`\>

Synchronizes all offline data entries of the given [type](interfaces/FetchResponse.md#type) for the currently logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `abortSignal?` | `AbortSignal` | An {@link AbortSignal} which can be used to cancel the operation. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:241](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L241)

___

### syncDynamicOfflineData

▸ **syncDynamicOfflineData**(`type`, `identifier`, `abortSignal?`): `Promise`<`void`\>

Synchronizes a single offline data entry of the given [type](interfaces/FetchResponse.md#type) for the currently logged in user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `identifier` | `string` | The identifier of the offline data. See [DynamicOfflineData](interfaces/DynamicOfflineData.md) for details. |
| `abortSignal?` | `AbortSignal` | An {@link AbortSignal} which can be used to cancel the operation. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/dynamic-offline-data.ts:254](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/dynamic-offline-data.ts#L254)

___

### syncOfflinePatientData

▸ **syncOfflinePatientData**(`patientUuid`): `Promise`<`void`\>

**`deprecated`** Will be removed once all modules have been migrated to the new dynamic offline data API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/framework/esm-offline/src/offline-patient-data.ts:62](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-offline/src/offline-patient-data.ts#L62)

___

### useConnectivity

▸ **useConnectivity**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-react-utils/src/useConnectivity.ts:6](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useConnectivity.ts#L6)

___

## Other Functions

### DashboardExtension

▸ **DashboardExtension**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`DashboardExtensionProps`](interfaces/DashboardExtensionProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/dashboard-extension/index.tsx:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/dashboard-extension/index.tsx#L16)

___

### WorkspaceContainer

▸ **WorkspaceContainer**(`__namedParameters`): `Element`

Use this component to render the [workspace window](https://zeroheight.com/23a080e38/p/483a22-workspace)
in an app such as the patient chart, or a workspace overlay in an app such as the clinic dashboard.
This allows workspaces to be opened on the page where this component is mounted. This component
must not be mounted multiple times on the same page. If there are multiple apps on a page, only
one of those apps should use this component—it "hosts" the workspaces.

Workspaces may be opened with the [launchWorkspace](API.md#launchworkspace) function from `@openmrs/esm-framework`
(among other options).

The `overlay` prop determines whether the workspace is rendered as an overlay or a window.
When a workspace window is opened, the other content on the screen will be pushed to the left.
When an overlay is opened, it will cover other content on the screen.

The context key is a string that appears in the URL, which defines the pages on which workspaces
are valid. If the URL changes in a way such that it no longer contains the context key, then
all workspaces will be closed. This ensures that, for example, workspaces on the home page do
not stay open when the user transitions to the patient dashboard; and also that workspaces do
not stay open when the user navigates to a different patient. The context key must be a valid
sub-path of the URL, with no initial or trailing slash. So if the URL is
`https://example.com/patient/123/foo`, then `patient` and `patient/123` and `123/foo` are valid
context keys, but `patient/12` and `pati` are not.

An extension slot is provided in the workspace header. Its name is derived from the `featureName` of
the top-level component in which it is defined (feature names are generally provided in the lifecycle
functions in an app's `index.ts` file). The slot is named `workspace-header-${featureName}-slot`.
For the patient chart, this is `workspace-header-patient-chart-slot`.

This component also provides the [Siderail and Bottom Nav](https://zeroheight.com/23a080e38/p/948cf1-siderail-and-bottom-nav/b/86907e).
To use this, pass the `showSiderailAndBottomNav` prop. The Siderail is rendered on the right side of the screen
on desktop, and the Bottom Nav is rendered at the bottom of the screen on tablet or mobile. The sidebar/bottom-nav
menu provides an extension slot, to which buttons are attached as extensions. The slot
derives its name from the `featureName` of the top-level component in which this `WorkspaceContainer`
appears (feature names are generally provided in the lifecycle functions in an app's `index.ts` file).
The slot is named `action-menu-${featureName}-items-slot`. For the patient chart, this is
`action-menu-patient-chart-items-slot`.

This component also provides everything needed for workspace notifications to be rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`WorkspaceContainerProps`](interfaces/WorkspaceContainerProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/container/workspace-container.component.tsx:68](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/container/workspace-container.component.tsx#L68)

___

### age

▸ **age**(`birthDate`, `currentDate?`): `string` \| ``null``

Gets a human readable and locale supported representation of a person's age, given their birthDate,
The representation logic follows the guideline here:
https://webarchive.nationalarchives.gov.uk/ukgwa/20160921162509mp_/http://systems.digital.nhs.uk/data/cui/uig/patben.pdf
(See Tables 7 and 8)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `birthDate` | `undefined` \| ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | The birthDate. If birthDate is null, returns null. |
| `currentDate?` | ``null`` \| `string` \| `number` \| `Date` \| `Dayjs` | Optional. If provided, calculates the age of the person at the provided currentDate (instead of now). |

#### Returns

`string` \| ``null``

A human-readable string version of the age.

#### Defined in

packages/framework/esm-utils/dist/age-helpers.d.ts:12

___

### compile

▸ **compile**(`expression`): `jsep.Expression`

`compile()` is a companion function for use with {@link evaluate()} and the various `evaluateAs*()` functions.
It processes an expression string into the resulting AST that is executed by those functions. This is useful if
you have an expression that will need to be evaluated mulitple times, potentially with different values, as the
lexing and parsing steps can be skipped by using the AST object returned from this.

The returned AST is intended to be opaque to client applications, but, of course, it is possible to manipulate
the AST before passing it back to {@link evaluate()}, if desired. This might be useful if, for example, certain
values are known to be constant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` | The expression to be parsed |

#### Returns

`jsep.Expression`

An executable AST representation of the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:323](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L323)

___

### createErrorHandler

▸ **createErrorHandler**(): (`incomingErr`: `unknown`) => `void`

#### Returns

`fn`

▸ (`incomingErr`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `incomingErr` | `unknown` |

##### Returns

`void`

#### Defined in

packages/framework/esm-error-handling/dist/index.d.ts:2

___

### dispatchNotificationShown

▸ **dispatchNotificationShown**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ShowNotificationEvent`](interfaces/ShowNotificationEvent.md) |

#### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:50

___

### dispatchPrecacheStaticDependencies

▸ **dispatchPrecacheStaticDependencies**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PrecacheStaticDependenciesEvent`](interfaces/PrecacheStaticDependenciesEvent.md) |

#### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:12

___

### evaluate

▸ **evaluate**(`expression`, `variables?`): [`DefaultEvaluateReturnType`](API.md#defaultevaluatereturntype)

`evaluate()` implements a relatively safe version of `eval()` that is limited to evaluating synchronous
Javascript expressions. This allows us to safely add features that depend on user-supplied code without
polluting the global namespace or needing to support `eval()` and the like.

By default it supports any expression that evalutes to a string, number, boolean, Date, null, or undefined.
Other values will result in an error.

**`example`**
```ts
// shouldDisplayOptionalData will be false
const shouldDisplayOptionalData = evaluate('!isEmpty(array)', {
 array: [],
 isEmpty(arr: unknown) {
  return Array.isArray(arr) && arr.length === 0;
 }
})
```

Since this only implements the expression lanaguage part of Javascript, there is no support for assigning
values, creating functions, or creating objects, so the following will throw an error:

**`example`**
```ts
evaluate('var a = 1; a');
```

In addition to string expressions, `evaluate()` can use an existing `jsep.Expression`, such as that returned
from the `compile()` function. The goal here is to support cases where the same expression will be evaluated
multiple times, possibly with different variables, e.g.,

**`example`**
```ts
const expr = compile('isEmpty(array)');

// then we use it like
evaluate(expr, {
 array: [],
 isEmpty(arr: unknown) {
  return Array.isArray(arr) && arr.length === 0;
 }
));

evaluate(expr, {
 array: ['value'],
 isEmpty(arr: unknown) {
  return Array.isArray(arr) && arr.length === 0;
 }
));
```

This saves the overhead of parsing the expression everytime and simply allows us to evaluate it.

The `variables` parameter should be used to supply any variables or functions that should be in-scope for
the evaluation. A very limited number of global objects, like NaN and Infinity are always available, but
any non-global values will need to be passed as a variable. Note that expressions do not have any access to
the variables in the scope in which they were defined unless they are supplied here.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Expression` | The expression to evaluate, either as a string or pre-parsed expression |
| `variables` | [`VariablesMap`](API.md#variablesmap) | Optional object which contains any variables, functions, etc. that will be available to  the expression. |

#### Returns

[`DefaultEvaluateReturnType`](API.md#defaultevaluatereturntype)

The result of evaluating the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:96](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L96)

___

### evaluateAsBoolean

▸ **evaluateAsBoolean**(`expression`, `variables?`): `Boolean`

`evaluateAsBoolean()` is a variant of {@link evaluate()} which only supports boolean results. Useful
if valid expression must return boolean values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Expression` | The expression to evaluate, either as a string or pre-parsed expression |
| `variables` | [`VariablesMap`](API.md#variablesmap) | Optional object which contains any variables, functions, etc. that will be available to  the expression. |

#### Returns

`Boolean`

The result of evaluating the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:179](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L179)

___

### evaluateAsBooleanAsync

▸ **evaluateAsBooleanAsync**(`expression`, `variables?`): `Promise`<`Boolean`\>

`evaluateAsBooleanAsync()` is a variant of {@link evaluateAsync()} which only supports boolean results. Useful
if valid expression must return boolean values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Expression` | The expression to evaluate, either as a string or pre-parsed expression |
| `variables` | [`VariablesMap`](API.md#variablesmap) | Optional object which contains any variables, functions, etc. that will be available to  the expression. |

#### Returns

`Promise`<`Boolean`\>

The result of evaluating the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:192](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L192)

___

### evaluateAsNumber

▸ **evaluateAsNumber**(`expression`, `variables?`): `number`

`evaluateAsNumber()` is a variant of {@link evaluate()} which only supports number results. Useful
if valid expression must return numeric values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Expression` | The expression to evaluate, either as a string or pre-parsed expression |
| `variables` | [`VariablesMap`](API.md#variablesmap) | Optional object which contains any variables, functions, etc. that will be available to  the expression. |

#### Returns

`number`

The result of evaluating the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:205](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L205)

___

### evaluateAsNumberAsync

▸ **evaluateAsNumberAsync**(`expression`, `variables?`): `Promise`<`number`\>

`evaluateAsNumberAsync()` is a variant of {@link evaluateAsync()} which only supports number results. Useful
if valid expression must return numeric values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Expression` | The expression to evaluate, either as a string or pre-parsed expression |
| `variables` | [`VariablesMap`](API.md#variablesmap) | Optional object which contains any variables, functions, etc. that will be available to  the expression. |

#### Returns

`Promise`<`number`\>

The result of evaluating the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:218](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L218)

___

### evaluateAsType

▸ **evaluateAsType**<`T`\>(`expression`, `variables?`, `typePredicate`): `T`

`evaluateAsType()` is a type-safe version of {@link evaluate()} which returns a result if the result
passes a custom type predicate. The main use-case for this is to narrow the return types allowed based on
context, e.g., if the expected result should be a number or boolean, you can supply a custom type-guard
to ensure that only number or boolean results are returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Expression` | The expression to evaluate, either as a string or pre-parsed expression |
| `variables` | [`VariablesMap`](API.md#variablesmap) | Optional object which contains any variables, functions, etc. that will be available to  the expression. |
| `typePredicate` | (`result`: `unknown`) => result is T | A [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)  which asserts that the result value matches one of the expected results. |

#### Returns

`T`

The result of evaluating the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:235](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L235)

___

### evaluateAsTypeAsync

▸ **evaluateAsTypeAsync**<`T`\>(`expression`, `variables?`, `typePredicate`): `Promise`<`T`\>

`evaluateAsTypeAsync()` is a type-safe version of {@link evaluateAsync()} which returns a result if the result
passes a custom type predicate. The main use-case for this is to narrow the return types allowed based on
context, e.g., if the expected result should be a number or boolean, you can supply a custom type-guard
to ensure that only number or boolean results are returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Expression` | The expression to evaluate, either as a string or pre-parsed expression |
| `variables` | [`VariablesMap`](API.md#variablesmap) | Optional object which contains any variables, functions, etc. that will be available to  the expression. |
| `typePredicate` | (`result`: `unknown`) => result is T | A [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)  which asserts that the result value matches one of the expected results. |

#### Returns

`Promise`<`T`\>

The result of evaluating the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:277](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L277)

___

### evaluateAsync

▸ **evaluateAsync**(`expression`, `variables?`): `Promise`<[`DefaultEvaluateReturnType`](API.md#defaultevaluatereturntype)\>

`evaluateAsync()` implements a relatively safe version of `eval()` that can evaluate Javascript expressions
that use Promises. This allows us to safely add features that depend on user-supplied code without
polluting the global namespace or needing to support `eval()` and the like.

By default it supports any expression that evalutes to a string, number, boolean, Date, null, or undefined.
Other values will result in an error.

**`example`**
```ts
// shouldDisplayOptionalData will be false
const shouldDisplayOptionalData = await evaluateAsync('Promise.resolve(!isEmpty(array))', {
 array: [],
 isEmpty(arr: unknown) {
  return Array.isArray(arr) && arr.length === 0;
 }
})
```

Since this only implements the expression lanaguage part of Javascript, there is no support for assigning
values, creating functions, or creating objects, so the following will throw an error:

**`example`**
```ts
evaluateAsync('var a = 1; a');
```

In addition to string expressions, `evaluate()` can use an existing `jsep.Expression`, such as that returned
from the `compile()` function. The goal here is to support cases where the same expression will be evaluated
multiple times, possibly with different variables, e.g.,

**`example`**
```ts
const expr = compile('Promise.resolve(isEmpty(array))');

// then we use it like
evaluateAsync(expr, {
 array: [],
 isEmpty(arr: unknown) {
  return Array.isArray(arr) && arr.length === 0;
 }
));

evaluateAsync(expr, {
 array: ['value'],
 isEmpty(arr: unknown) {
  return Array.isArray(arr) && arr.length === 0;
 }
));
```

This saves the overhead of parsing the expression everytime and simply allows us to evaluate it.

The `variables` parameter should be used to supply any variables or functions that should be in-scope for
the evaluation. A very limited number of global objects, like NaN and Infinity are always available, but
any non-global values will need to be passed as a variable. Note that expressions do not have any access to
the variables in the scope in which they were defined unless they are supplied here.

**Note:** `evaluateAsync()` currently only supports Promise-based asynchronous flows and does not support
the `await` keyword.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Expression` | The expression to evaluate, either as a string or pre-parsed expression |
| `variables` | [`VariablesMap`](API.md#variablesmap) | Optional object which contains any variables, functions, etc. that will be available to  the expression. |

#### Returns

`Promise`<[`DefaultEvaluateReturnType`](API.md#defaultevaluatereturntype)\>

The result of evaluating the expression

#### Defined in

[packages/framework/esm-expression-evaluator/src/evaluator.ts:166](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/evaluator.ts#L166)

___

### extractVariableNames

▸ **extractVariableNames**(`expression`): `string`[]

`extractVariableNames()` is a companion function for `evaluate()` and `evaluateAsync()` which extracts the
names of all unbound identifiers used in the expression. The idea is to be able to extract all of the names
of variables that will need to be supplied in order to correctly process the expression.

**`example`**
```ts
// variables will be ['isEmpty', 'array']
const variables = extractVariableNames('!isEmpty(array)')
```

An identifier is considered "unbound" if it is not a reference to the property of an object, is not defined
as a parameter to an inline arrow function, and is not a global value. E.g.,

**`example`**
```ts
// variables will be ['obj']
const variables = extractVariableNames('obj.prop()')
```

**`example`**
```ts
// variables will be ['arr', 'needle']
const variables = extractVariableNames('arr.filter(v => v === needle)')
```

**`example`**
```ts
// variables will be ['myVar']
const  variables = extractVariableNames('new String(myVar)')
```

Note that because this expression evaluator uses a restricted definition of "global" there are some Javascript
globals that will be reported as a unbound expression. This is expected because the evaluator will still fail
on these expressions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` \| `Expression` |

#### Returns

`string`[]

#### Defined in

[packages/framework/esm-expression-evaluator/src/extractor.ts:44](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-expression-evaluator/src/extractor.ts#L44)

___

### getLocale

▸ **getLocale**(): `string`

Returns the current locale of the application.

#### Returns

`string`

string

#### Defined in

packages/framework/esm-utils/dist/get-locale.d.ts:5

___

### isDevEnabled

▸ **isDevEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-api/src/environment.ts:3](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-api/src/environment.ts#L3)

___

### isOnline

▸ **isOnline**(`online?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `online?` | `boolean` |

#### Returns

`boolean`

#### Defined in

packages/framework/esm-utils/dist/is-online.d.ts:1

___

### isVersionSatisfied

▸ **isVersionSatisfied**(`requiredVersion`, `installedVersion`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `requiredVersion` | `string` |
| `installedVersion` | `string` |

#### Returns

`boolean`

#### Defined in

packages/framework/esm-utils/dist/version.d.ts:1

___

### reportError

▸ **reportError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |

#### Returns

`void`

#### Defined in

packages/framework/esm-error-handling/dist/index.d.ts:1

___

### setLeftNav

▸ **setLeftNav**(`__namedParameters`): `void`

Sets the current left nav context. Must be paired with [unsetLeftNav](API.md#unsetleftnav).

**`deprecated`** Please use [useLeftNav](API.md#useleftnav) instead. This function will be made internal in a future release.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`SetLeftNavParams`](interfaces/SetLeftNavParams.md) |

#### Returns

`void`

#### Defined in

[packages/framework/esm-extensions/src/left-nav.ts:37](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/left-nav.ts#L37)

___

### unsetLeftNav

▸ **unsetLeftNav**(`name`): `void`

Unsets the left nav context if the current context is for the supplied name.

**`deprecated`** Please use [useLeftNav](API.md#useleftnav) instead. This function will be made internal in a future release.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-extensions/src/left-nav.ts:46](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-extensions/src/left-nav.ts#L46)

___

### useFhirFetchAll

▸ **useFhirFetchAll**<`T`\>(`url`, `options?`): `UseServerInfiniteReturnObject`<`T`, `fhir.Bundle`\>

This hook handles fetching results from *all* pages of a paginated FHIR REST endpoint, making multiple requests
as needed.
This function is the FHIR counterpart of `useOpenmrsPagination`.

**`see`** `useFhirPagination`

**`see`** `useFhirInfinite`

**`see`** `useOpenmrsFetchAll``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ResourceBase` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `any` | The URL of the paginated rest endpoint.            Similar to useSWRInfinite, this param can be null to disable fetching. |
| `options` | [`UseServerFetchAllOptions`](interfaces/UseServerFetchAllOptions.md)<`Bundle`\> | The options object |

#### Returns

`UseServerInfiniteReturnObject`<`T`, `fhir.Bundle`\>

a UseFhirInfiniteReturnObject object

#### Defined in

[packages/framework/esm-react-utils/src/useFhirFetchAll.ts:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useFhirFetchAll.ts#L19)

___

### useFhirInfinite

▸ **useFhirInfinite**<`T`\>(`url`, `options?`): `UseServerInfiniteReturnObject`<`T`, `fhir.Bundle`\>

Fhir REST endpoints that return a list of objects, are server-side paginated.
The server limits the max number of results being returned, and multiple requests are needed to get the full data set
if its size exceeds this limit.

This function is the FHIR counterpart of `useOpenmrsInfinite`.

**`see`** `useFhirPagination`

**`see`** `useFhirFetchAll`

**`see`** `useOpenmrsInfinite`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ResourceBase` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| `URL` | The URL of the paginated rest endpoint.            Similar to useSWRInfinite, this param can be null to disable fetching. |
| `options` | [`UseServerInfiniteOptions`](interfaces/UseServerInfiniteOptions.md)<`Bundle`\> | The options object |

#### Returns

`UseServerInfiniteReturnObject`<`T`, `fhir.Bundle`\>

a UseServerInfiniteReturnObject object

#### Defined in

[packages/framework/esm-react-utils/src/useFhirInfinite.ts:24](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useFhirInfinite.ts#L24)

___

### useLeftNav

▸ **useLeftNav**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Omit`<`SetLeftNavParams`, ``"module"``\> |

#### Returns

`void`

#### Defined in

[packages/framework/esm-react-utils/src/useLeftNav.ts:5](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLeftNav.ts#L5)

___

### useLeftNavStore

▸ **useLeftNavStore**(): `LeftNavStore`

#### Returns

`LeftNavStore`

#### Defined in

[packages/framework/esm-react-utils/src/useLeftNavStore.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLeftNavStore.ts#L4)

___

### useVisitContextStore

▸ **useVisitContextStore**(`mutateVisitCallback?`): `VisitStoreState` & `BindFunctionsIn`<{ `mutateVisit`: (`currState`: `VisitStoreState`) => {} ; `setVisitContext`: (`_`: `VisitStoreState`, `newSelectedVisit`: ``null`` \| `Visit`) => { `manuallySetVisitUuid`: ``null`` \| `string` ; `patientUuid`: ``null`` \| `string`  }  }\>

A hook to return the visit context store and corresponding actions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutateVisitCallback?` | () => `void` | An optional mutate callback to register. If provided, the store action's `mutateVisit` function will invoke this callback (along with any other callbacks also registered into the store) |

#### Returns

`VisitStoreState` & `BindFunctionsIn`<{ `mutateVisit`: (`currState`: `VisitStoreState`) => {} ; `setVisitContext`: (`_`: `VisitStoreState`, `newSelectedVisit`: ``null`` \| `Visit`) => { `manuallySetVisitUuid`: ``null`` \| `string` ; `patientUuid`: ``null`` \| `string`  }  }\>

#### Defined in

[packages/framework/esm-react-utils/src/useVisitContextStore.ts:28](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useVisitContextStore.ts#L28)

___

## Store Functions

### createGlobalStore

▸ **createGlobalStore**<`T`\>(`name`, `initialState`): `StoreApi`<`T`\>

Creates a Zustand store.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | A name by which the store can be looked up later.    Must be unique across the entire application. |
| `initialState` | `T` | An object which will be the initial state of the store. |

#### Returns

`StoreApi`<`T`\>

The newly created store.

#### Defined in

[packages/framework/esm-state/src/state.ts:30](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-state/src/state.ts#L30)

___

### createUseStore

▸ **createUseStore**<`T`\>(`store`): () => `T`<A\>(`actions`: `A`) => `T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\><A\>(`actions?`: `A`) => `T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

Whenever possible, use `useStore(yourStore)` instead. This function is for creating a
custom hook for a specific store.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

▸ <`A`\>(`actions`): `T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Actions`](API.md#actions)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | `A` |

##### Returns

`T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

▸ <`A`\>(`actions?`): `T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Actions`](API.md#actions)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `actions?` | `A` |

##### Returns

`T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:95](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L95)

___

### getGlobalStore

▸ **getGlobalStore**<`T`\>(`name`, `fallbackState?`): `StoreApi`<`T`\>

Returns the existing store named `name`,
or creates a new store named `name` if none exists.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the store to look up. |
| `fallbackState?` | `T` | The initial value of the new store if no store named `name` exists. |

#### Returns

`StoreApi`<`T`\>

The found or newly created store.

#### Defined in

[packages/framework/esm-state/src/state.ts:92](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-state/src/state.ts#L92)

___

### subscribeTo

▸ **subscribeTo**<`T`, `U`\>(`store`, `handle`): () => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `handle` | (`state`: `T`) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** Store

##### Returns

`void`

#### Defined in

[packages/framework/esm-state/src/state.ts:109](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-state/src/state.ts#L109)

▸ **subscribeTo**<`T`, `U`\>(`store`, `select`, `handle`): () => `void`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `select` | (`state`: `T`) => `U` |
| `handle` | (`subState`: `U`) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** Store

##### Returns

`void`

#### Defined in

[packages/framework/esm-state/src/state.ts:110](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-state/src/state.ts#L110)

___

### useStore

▸ **useStore**<`T`\>(`store`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |

#### Returns

`T`

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:53](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L53)

▸ **useStore**<`T`, `U`\>(`store`, `select`): `U`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `select` | (`state`: `T`) => `U` |

#### Returns

`U`

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:54](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L54)

▸ **useStore**<`T`, `U`, `A`\>(`store`, `select`, `actions`): `T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `U` |
| `A` | extends [`Actions`](API.md#actions)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `select` | `undefined` |
| `actions` | `A` |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:55](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L55)

▸ **useStore**<`T`, `U`, `A`\>(`store`, `select`, `actions`): `U` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `U` |
| `A` | extends [`Actions`](API.md#actions)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `StoreApi`<`T`\> |
| `select` | (`state`: `T`) => `U` |
| `actions` | `A` |

#### Returns

`U` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:60](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L60)

___

### useStoreWithActions

▸ **useStoreWithActions**<`T`, `A`\>(`store`, `actions`): `T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`Actions`](API.md#actions)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `store` | `StoreApi`<`T`\> | A zustand store |
| `actions` | `A` |  |

#### Returns

`T` & [`BoundActions`](API.md#boundactions)<`T`, `A`\>

#### Defined in

[packages/framework/esm-react-utils/src/useStore.ts:87](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useStore.ts#L87)

___

## Translation Functions

### getCoreTranslation

▸ **getCoreTranslation**(`key`, `defaultText?`, `options?`): `string`

Use this function to obtain a translation from the core translations. This is a way to avoid having
to define common translations in your app, and to ensure that translations are consistent across
different apps. This function is also used to obtain translations in the framework and app shell.

The complete set of core translations is available on the `CoreTranslationKey` type. Providing an
invalid key to this function will result in a type error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | ``"error"`` \| ``"actions"`` \| ``"address"`` \| ``"age"`` \| ``"cancel"`` \| ``"change"`` \| ``"Clinic"`` \| ``"close"`` \| ``"confirm"`` \| ``"contactAdministratorIfIssuePersists"`` \| ``"contactDetails"`` \| ``"delete"`` \| ``"edit"`` \| ``"errorCopy"`` \| ``"female"`` \| ``"loading"`` \| ``"male"`` \| ``"other"`` \| ``"patientIdentifierSticker"`` \| ``"patientLists"`` \| ``"print"`` \| ``"printError"`` \| ``"printErrorExplainer"`` \| ``"printIdentifierSticker"`` \| ``"printing"`` \| ``"relationships"`` \| ``"resetOverrides"`` \| ``"save"`` \| ``"scriptLoadingFailed"`` \| ``"scriptLoadingError"`` \| ``"seeMoreLists"`` \| ``"sex"`` \| ``"showLess"`` \| ``"showMore"`` \| ``"toggleDevTools"`` \| ``"unknown"`` \| ``"closeAllOpenedWorkspaces"`` \| ``"closingAllWorkspacesPromptBody"`` \| ``"closingAllWorkspacesPromptTitle"`` \| ``"discard"`` \| ``"hide"`` \| ``"maximize"`` \| ``"minimize"`` \| ``"openAnyway"`` \| ``"unsavedChangesInOpenedWorkspace"`` \| ``"unsavedChangesInWorkspace"`` \| ``"unsavedChangesTitleText"`` \| ``"workspaceHeader"`` \| ``"address1"`` \| ``"address2"`` \| ``"address3"`` \| ``"address4"`` \| ``"address5"`` \| ``"address6"`` \| ``"city"`` \| ``"cityVillage"`` \| ``"country"`` \| ``"countyDistrict"`` \| ``"district"`` \| ``"postalCode"`` \| ``"state"`` \| ``"stateProvince"`` | - |
| `defaultText?` | `string` | - |
| `options?` | `Omit`<`TOptions`<`StringMap`\>, ``"ns"`` \| ``"defaultValue"``\> | Object passed to the i18next `t` function. See https://www.i18next.com/translation-function/essentials#overview-options           for more information. `ns` and `defaultValue` are already set and may not be used. |

#### Returns

`string`

#### Defined in

[packages/framework/esm-translations/src/index.ts:66](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-translations/src/index.ts#L66)

___

### translateFrom

▸ **translateFrom**(`moduleName`, `key`, `fallback?`, `options?`): `string`

This function is for getting a translation from a specific module. Use this only if the
translation is neither in the app making the call, nor in the core translations.
This function is useful, for example, in libraries that are used by multiple apps, since libraries can't
define their own translations.

Translations within the current app should be accessed with the i18next API, using
`useTranslation` and `t` as usual. Core translations should be accessed with the
[getCoreTranslation](API.md#getcoretranslation) function.

IMPORTANT: This function creates a hidden dependency on the module. Worse yet, it creates
a dependency specifically on that module's translation keys, which are often regarded as
"implementation details" and therefore may be volatile. Also note that this function DOES NOT
load the module's translations if they have not already been loaded via `useTranslation`.
**This function should therefore be avoided when possible.**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | The module to get the translation from, e.g. '@openmrs/esm-login-app' |
| `key` | `string` | The i18next translation key |
| `fallback?` | `string` | Fallback text for if the lookup fails |
| `options?` | `Omit`<`TOptions`<`StringMap`\>, ``"ns"`` \| ``"defaultValue"``\> | Options object passed to the i18next `t` function. See https://www.i18next.com/translation-function/essentials#overview-options            for more information. `ns` and `defaultValue` are already set and may not be used. |

#### Returns

`string`

The translated text as a string

#### Defined in

[packages/framework/esm-translations/src/index.ts:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-translations/src/index.ts#L40)

___

## UI Functions

### CustomOverflowMenu

▸ **CustomOverflowMenu**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `CustomOverflowMenuProps` |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/custom-overflow-menu/custom-overflow-menu.component.tsx:12](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/custom-overflow-menu/custom-overflow-menu.component.tsx#L12)

___

### PatientBannerActionsMenu

▸ **PatientBannerActionsMenu**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PatientBannerActionsMenuProps`](interfaces/PatientBannerActionsMenuProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/actions-menu/patient-banner-actions-menu.component.tsx:20](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/actions-menu/patient-banner-actions-menu.component.tsx#L20)

___

### PatientBannerContactDetails

▸ **PatientBannerContactDetails**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `ContactDetailsProps` |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/contact-details/patient-banner-contact-details.component.tsx:183](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/contact-details/patient-banner-contact-details.component.tsx#L183)

___

### PatientBannerPatientIdentifiers

▸ **PatientBannerPatientIdentifiers**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PatientBannerPatientIdentifiersProps` |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/patient-info/patient-banner-patient-identifiers.component.tsx:39](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/patient-info/patient-banner-patient-identifiers.component.tsx#L39)

___

### PatientBannerPatientInfo

▸ **PatientBannerPatientInfo**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PatientBannerPatientInfoProps` |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/patient-info/patient-banner-patient-info.component.tsx:61](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/patient-info/patient-banner-patient-info.component.tsx#L61)

___

### PatientBannerToggleContactDetailsButton

▸ **PatientBannerToggleContactDetailsButton**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PatientBannerToggleContactDetailsButtonProps`](interfaces/PatientBannerToggleContactDetailsButtonProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-banner/contact-details/patient-banner-toggle-contact-details-button.component.tsx:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-banner/contact-details/patient-banner-toggle-contact-details-button.component.tsx#L16)

___

### PatientPhoto

▸ **PatientPhoto**(`__namedParameters`): `Element`

A component which displays the patient photo https://zeroheight.com/23a080e38/p/6663f3-patient-header. If there is no photo, it will display a generated avatar. The default size is 56px.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`PatientPhotoProps`](interfaces/PatientPhotoProps.md) |

#### Returns

`Element`

#### Defined in

[packages/framework/esm-styleguide/src/patient-photo/patient-photo.component.tsx:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-photo/patient-photo.component.tsx#L19)

___

### getFhirServerPaginationHandlers

▸ **getFhirServerPaginationHandlers**<`T`\>(): `FhirServerPaginationHandlers`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`FhirServerPaginationHandlers`<`T`\>

#### Defined in

[packages/framework/esm-react-utils/src/useFhirPagination.ts:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useFhirPagination.ts#L36)

___

### isDesktop

▸ **isDesktop**(`layout`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`LayoutType`](API.md#layouttype) |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-react-utils/src/useLayoutType.ts:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLayoutType.ts#L40)

___

### showActionableNotification

▸ **showActionableNotification**(`notification`): `void`

Displays an actionable notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [`ActionableNotificationDescriptor`](interfaces/ActionableNotificationDescriptor.md) | The description of the notification to display. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/notifications/index.tsx:85](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/notifications/index.tsx#L85)

___

### showModal

▸ **showModal**(`modalName`, `props?`, `onClose?`): () => `void`

Shows a modal dialog.

The modal must have been registered by name. This should be done in the `routes.json` file of the
app that defines the modal. Note that both the `<ModalHeader>` and `<ModalBody>` should be at the
top level of the modal component (wrapped in a React.Fragment), or else the content of the modal
body might not vertical-scroll properly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modalName` | `string` | The name of the modal to show. |
| `props` | `ModalProps` | The optional props to provide to the modal. |
| `onClose` | () => `void` | The optional callback to call when the modal is closed. |

#### Returns

`fn`

The dispose function to force closing the modal dialog.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/modals/index.tsx:200](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/modals/index.tsx#L200)

___

### showNotification

▸ **showNotification**(`notification`): `void`

Displays an inline notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [`NotificationDescriptor`](interfaces/NotificationDescriptor.md) | The description of the notification to display. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/notifications/index.tsx:43](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/notifications/index.tsx#L43)

___

### showSnackbar

▸ **showSnackbar**(`snackbar`): `void`

Displays a snack bar notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `snackbar` | [`SnackbarDescriptor`](interfaces/SnackbarDescriptor.md) | The description of the snack bar to display. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/snackbars/index.tsx:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/snackbars/index.tsx#L32)

___

### showToast

▸ **showToast**(`toast`): `void`

Displays a toast notification in the UI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toast` | [`ToastDescriptor`](interfaces/ToastDescriptor.md) | The description of the toast to display. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/toasts/index.tsx:36](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/index.tsx#L36)

___

### subscribeActionableNotificationShown

▸ **subscribeActionableNotificationShown**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`ShowActionableNotificationEvent`](interfaces/ShowActionableNotificationEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** UI

##### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:60

___

### subscribeNotificationShown

▸ **subscribeNotificationShown**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`ShowNotificationEvent`](interfaces/ShowNotificationEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** UI

##### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:58

___

### subscribeSnackbarShown

▸ **subscribeSnackbarShown**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`ShowSnackbarEvent`](interfaces/ShowSnackbarEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** UI

##### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:64

___

### subscribeToastShown

▸ **subscribeToastShown**(`cb`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: [`ShowToastEvent`](interfaces/ShowToastEvent.md)) => `void` |

#### Returns

`fn`

▸ (): `void`

**`category`** UI

##### Returns

`void`

#### Defined in

packages/framework/esm-globals/dist/events.d.ts:62

___

### useBodyScrollLock

▸ **useBodyScrollLock**(`active`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-react-utils/src/useBodyScrollLock.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useBodyScrollLock.ts#L4)

___

### useFhirPagination

▸ **useFhirPagination**<`T`\>(`url`, `pageSize`, `options?`): `Object`

Fhir REST endpoints that return a list of objects, are server-side paginated.
The server limits the max number of results being returned, and multiple requests are needed to get the full data set
if its size exceeds this limit.

This function is the FHIR counterpart of `useOpenmrsPagination`.

**`see`** `useOpenmrsPagination

**`see`** `useFhirInfinite`

**`see`** `useFhirFetchAll`

**`see`** `usePagination` for pagination of client-side data`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ResourceBase` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| `URL` | The URL of the paginated rest endpoint.            which will be overridden and manipulated by the `goTo*` callbacks |
| `pageSize` | `number` | The number of results to return per page / fetch. |
| `options` | [`UseServerPaginationOptions`](interfaces/UseServerPaginationOptions.md)<`Bundle`\> | The options object |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentPage` | `number` | - |
| `currentPageSize` | `MutableRefObject`<`number`\> | - |
| `data` | `undefined` \| `T`[] |  |
| `error` | `any` | The error object thrown by the fetcher function. |
| `goTo` | (`page`: `number`) => `void` | - |
| `goToNext` | () => `void` | - |
| `goToPrevious` | () => `void` | - |
| `isLoading` | `boolean` | - |
| `isValidating` | `boolean` | - |
| `mutate` | `KeyedMutator`<`FetchResponse`<`Bundle`\>\> | - |
| `paginated` | `boolean` |  |
| `showNextButton` | `boolean` |  |
| `showPreviousButton` | `boolean` |  |
| `totalCount` | `number` |  |
| `totalPages` | `number` | - |

#### Defined in

[packages/framework/esm-react-utils/src/useFhirPagination.ts:27](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useFhirPagination.ts#L27)

___

### useLayoutType

▸ **useLayoutType**(): [`LayoutType`](API.md#layouttype)

#### Returns

[`LayoutType`](API.md#layouttype)

#### Defined in

[packages/framework/esm-react-utils/src/useLayoutType.ts:26](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useLayoutType.ts#L26)

___

### useOnClickOutside

▸ **useOnClickOutside**<`T`\>(`handler`, `active?`): `RefObject`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement`<`T`\> = `HTMLElement` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `handler` | (`event`: `MouseEvent`) => `void` | `undefined` |
| `active` | `boolean` | `true` |

#### Returns

`RefObject`<`T`\>

#### Defined in

[packages/framework/esm-react-utils/src/useOnClickOutside.ts:4](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOnClickOutside.ts#L4)

___

### useOnVisible

▸ **useOnVisible**(`callBack`): `MutableRefObject`<`HTMLElement`\>

Returns a ref that can be used on a HTML component to trigger
an action when the component is scrolled into visible view,
This is particularly useful for infinite scrolling UIs to load data on demand.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callBack` | () => `void` | The callback to run when the component is scrolled into visible view.   Care should be taken with this param. The callback should   be cached across re-renders (via useCallback) and it should have   logic to avoid doing work multiple times while scrolling. |

#### Returns

`MutableRefObject`<`HTMLElement`\>

a ref that can be passed to an HTML Element

#### Defined in

[packages/framework/esm-react-utils/src/useOnVisible.ts:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOnVisible.ts#L15)

___

### useOpenmrsFetchAll

▸ **useOpenmrsFetchAll**<`T`\>(`url`, `options?`): `UseServerInfiniteReturnObject`<`T`, `OpenMRSPaginatedResponse`<`T`\>\>

Most OpenMRS REST endpoints that return a list of objects, such as getAll or search, are server-side paginated.
This hook handles fetching results from *all* pages of a paginated OpenMRS REST endpoint, making multiple requests
as needed.

**`see`** `useOpenmrsPagination`

**`see`** `useOpenmrsInfinite`

**`see`** `useFhirFetchAll`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| `URL` | The URL of the paginated OpenMRS REST endpoint. Note that the `limit` GET param can be set to specify            the page size; if not set, the page size defaults to the `webservices.rest.maxResultsDefault` value defined            server-side.            Similar to useSWRInfinite, this param can be null to disable fetching. |
| `options` | [`UseServerFetchAllOptions`](interfaces/UseServerFetchAllOptions.md)<`OpenMRSPaginatedResponse`<`T`\>\> | The options object |

#### Returns

`UseServerInfiniteReturnObject`<`T`, `OpenMRSPaginatedResponse`<`T`\>\>

a UseOpenmrsInfiniteReturnObject object

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsFetchAll.ts:40](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsFetchAll.ts#L40)

___

### useOpenmrsInfinite

▸ **useOpenmrsInfinite**<`T`\>(`url`, `options?`): `UseServerInfiniteReturnObject`<`T`, `OpenMRSPaginatedResponse`<`T`\>\>

Most REST endpoints that return a list of objects, such as getAll or search, are server-side paginated.
The server limits the max number of results being returned, and multiple requests are needed to get the full data set
if its size exceeds this limit.
The max number of results per request is configurable server-side
with the key "webservices.rest.maxResultsDefault". See: https://openmrs.atlassian.net/wiki/spaces/docs/pages/25469882/REST+Module

This hook fetches data from a paginated rest endpoint, initially by fetching the first page of the results.
It provides a callback to load data from subsequent pages as needed. This hook is intended to serve UIs that
provide infinite loading / scrolling of results. Unlike `useOpenmrsPagination`, this hook does not allow random access
(and lazy-loading) of any arbitrary page; rather, it fetches pages sequentially starting form the initial page, and the next page
is fetched by calling `loadMore`. See: https://swr.vercel.app/docs/pagination#useswrinfinite

**`see`** `useOpenmrsPagination`

**`see`** `useOpenmrsFetchAll`

**`see`** `useFhirInfinite`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| `URL` | The URL of the paginated rest endpoint. Note that the `limit` GET param can be set to specify            the page size; if not set, the page size defaults to the `webservices.rest.maxResultsDefault` value defined            server-side.            Similar to useSWRInfinite, this param can be null to disable fetching. |
| `options` | [`UseServerInfiniteOptions`](interfaces/UseServerInfiniteOptions.md)<`OpenMRSPaginatedResponse`<`T`\>\> | The options object |

#### Returns

`UseServerInfiniteReturnObject`<`T`, `OpenMRSPaginatedResponse`<`T`\>\>

a UseServerInfiniteReturnObject object

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsInfinite.ts:102](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsInfinite.ts#L102)

___

### useOpenmrsPagination

▸ **useOpenmrsPagination**<`T`\>(`url`, `pageSize`, `options?`): `Object`

Most OpenMRS REST endpoints that return a list of objects, such as getAll or search, are server-side paginated.
The server limits the max number of results being returned, and multiple requests are needed to get the full data set
if its size exceeds this limit.
The max number of results per request is configurable server-side
with the key "webservices.rest.maxResultsDefault". See: https://openmrs.atlassian.net/wiki/spaces/docs/pages/25469882/REST+Module

For any UI that displays a paginated view of the full data set, we MUST handle the server-side pagination properly,
or else the UI does not correctly display the full data set.
This hook does that by providing callback functions for navigating to different pages of the results, and
lazy-loads the data on each page as needed.

Note that this hook is not suitable for use for situations that require client-side sorting or filtering
of the data set. In that case, all data must be loaded onto client-side first.

**`see`** `useOpenmrsInfinite`

**`see`** `useOpenmrsFetchAll`

**`see`** `usePagination` for pagination of client-side data`

**`see`** `useFhirPagination``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` \| `URL` | The URL of the paginated rest endpoint. \            It should be populated with any needed GET params, except `limit`, `startIndex` or `totalCount`,            which will be overridden and manipulated by the `goTo*` callbacks.            Similar to useSWR, this param can be null to disable fetching. |
| `pageSize` | `number` | The number of results to return per page / fetch. Note that this value MUST NOT exceed            "webservices.rest.maxResultsAbsolute", which should be reasonably high by default (1000). |
| `options` | [`UseServerPaginationOptions`](interfaces/UseServerPaginationOptions.md)<`OpenMRSPaginatedResponse`<`T`\>\> | The options object |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentPage` | `number` | - |
| `currentPageSize` | `MutableRefObject`<`number`\> | - |
| `data` | `undefined` \| `T`[] |  |
| `error` | `any` | The error object thrown by the fetcher function. |
| `goTo` | (`page`: `number`) => `void` | - |
| `goToNext` | () => `void` | - |
| `goToPrevious` | () => `void` | - |
| `isLoading` | `boolean` | - |
| `isValidating` | `boolean` | - |
| `mutate` | `KeyedMutator`<`FetchResponse`<`OpenMRSPaginatedResponse`<`T`\>\>\> | - |
| `paginated` | `boolean` |  |
| `showNextButton` | `boolean` |  |
| `showPreviousButton` | `boolean` |  |
| `totalCount` | `number` |  |
| `totalPages` | `number` | - |

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsPagination.ts:59](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsPagination.ts#L59)

___

### usePagination

▸ **usePagination**<`T`\>(`data?`, `resultsPerPage?`): `Object`

Use this hook to paginate data that already exists on the client side.
Note that if the data is obtained from server-side, the caller must handle server-side pagination manually.

**`see`** `useServerPagination` for hook that automatically manages server-side pagination.

**`see`** `useServerInfinite` for hook to get all data loaded onto the client-side

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T`[] | `[]` |
| `resultsPerPage` | `number` | `defaultResultsPerPage` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `currentPage` | `number` |
| `goTo` | (`page`: `number`) => `void` |
| `goToNext` | () => `void` |
| `goToPrevious` | () => `void` |
| `paginated` | `boolean` |
| `results` | `T`[] |
| `showNextButton` | `boolean` |
| `showPreviousButton` | `boolean` |
| `totalPages` | `number` |

#### Defined in

[packages/framework/esm-react-utils/src/usePagination.ts:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/usePagination.ts#L15)

___

### usePatientPhoto

▸ **usePatientPhoto**(`patientUuid`): [`UsePatientPhotoResult`](interfaces/UsePatientPhotoResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `patientUuid` | `string` |

#### Returns

[`UsePatientPhotoResult`](interfaces/UsePatientPhotoResult.md)

#### Defined in

[packages/framework/esm-styleguide/src/patient-photo/usePatientPhoto.ts:30](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/patient-photo/usePatientPhoto.ts#L30)

___

## Utility Functions

### canAccessStorage

▸ **canAccessStorage**(`storage?`): `boolean`

Simple utility function to determine if an object implementing the WebStorage API
is actually available. Useful for testing the availability of `localStorage` or
`sessionStorage`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storage?` | `Storage` | The WebStorage API object to check. Defaults to `localStorage`. |

#### Returns

`boolean`

True if the WebStorage API object is able to be accessed, false otherwise

#### Defined in

packages/framework/esm-utils/dist/storage.d.ts:10

___

### displayName

▸ **displayName**(`patient`): `string`

**`deprecated`** Use `getPatientName`

#### Parameters

| Name | Type |
| :------ | :------ |
| `patient` | `Patient` |

#### Returns

`string`

#### Defined in

packages/framework/esm-utils/dist/patient-helpers.d.ts:15

___

### formatPatientName

▸ **formatPatientName**(`name`): `string`

Get a formatted display string for an FHIR name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `undefined` \| `HumanName` | The name to be formatted. |

#### Returns

`string`

The formatted display name or an empty string if name is undefined.

#### Defined in

packages/framework/esm-utils/dist/patient-helpers.d.ts:21

___

### formattedName

▸ **formattedName**(`name`): `string`

**`deprecated`** Use `formatPatientName`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `undefined` \| `HumanName` |

#### Returns

`string`

#### Defined in

packages/framework/esm-utils/dist/patient-helpers.d.ts:23

___

### getDefaultsFromConfigSchema

▸ **getDefaultsFromConfigSchema**<`T`\>(`schema`): `T`

Given a config schema, this returns an object like is returned by `useConfig`
with all default values.

This should be used in tests and not in production code.

If all you need is the default values in your tests, these are returned by
default from the `useConfig`/`getConfig` mock. This function is useful if you
need to override some of the default values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `Record`<`string` \| `number` \| `symbol`, `unknown`\> |

#### Returns

`T`

#### Defined in

packages/framework/esm-utils/dist/test-helpers.d.ts:12

___

### getPatientName

▸ **getPatientName**(`patient`): `string`

Gets the formatted display name for a patient.

The display name will be taken from the patient's 'usual' name,
or may fall back to the patient's 'official' name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `patient` | `Patient` | The patient details in FHIR format. |

#### Returns

`string`

The patient's display name or an empty string if name is not present.

#### Defined in

packages/framework/esm-utils/dist/patient-helpers.d.ts:13

___

### retry

▸ **retry**<`T`\>(`fn`, `options?`): `Promise`<`T`\>

Executes the specified function and retries executing on failure with a custom backoff strategy
defined by the options.

If not configured otherwise, this function uses the following default options:
* Retries 5 times beyond the initial attempt.
* Uses an exponential backoff starting with an initial delay of 1000ms.

**`throws`** Rethrows the final error of running `fn` when the function stops retrying.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `Promise`<`T`\> | The function to be executed and retried on failure. |
| `options?` | [`RetryOptions`](interfaces/RetryOptions.md) | Additional options which configure the retry behavior. |

#### Returns

`Promise`<`T`\>

The result of successfully executing `fn`.

#### Defined in

packages/framework/esm-utils/dist/retry.d.ts:38

___

### selectPreferredName

▸ **selectPreferredName**(`patient`, ...`preferredNames`): `fhir.HumanName` \| `undefined`

Select the preferred name from the collection of names associated with a patient.

Names may be specified with a usage such as 'usual', 'official', 'nickname', 'maiden', etc.
A name with no usage specified is treated as the 'usual' name.

The chosen name will be selected according to the priority order of `preferredNames`,

**`example`**
// normal use case; prefer usual name, fallback to official name
displayNameByUsage(patient, 'usual', 'official')

**`example`**
// prefer usual name over nickname, fallback to official name
displayNameByUsage(patient, 'usual', 'nickname', 'official')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `patient` | `Patient` | The patient from whom a name will be selected. |
| `...preferredNames` | [`NameUse`](API.md#nameuse)[] | Optional ordered sequence of preferred name usages; defaults to 'usual' if not specified. |

#### Returns

`fhir.HumanName` \| `undefined`

the preferred name for the patient, or undefined if no acceptable name could be found.

#### Defined in

packages/framework/esm-utils/dist/patient-helpers.d.ts:42

___

### shallowEqual

▸ **shallowEqual**(`a`, `b`): `boolean`

Checks whether two objects are equal, using a shallow comparison, similar to React.

In essence, shallowEquals ensures two objects have the same own properties and that the values
of these are equal (===) to each other.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `unknown` | The first value to compare |
| `b` | `unknown` | The second value to compare |

#### Returns

`boolean`

true if the objects are shallowly equal to each other

#### Defined in

packages/framework/esm-utils/dist/shallowEqual.d.ts:12

___

### useAbortController

▸ **useAbortController**(): `AbortController`

**`beta`**

This hook creates an AbortController that lasts either until the previous AbortController
is aborted or until the component unmounts. This can be used to ensure that all fetch requests
are cancelled when a component is unmounted.

**`example`**
```tsx
import { useAbortController } from "@openmrs/esm-framework";

function MyComponent() {
 const abortController = useAbortController();
 const { data } = useSWR(key, (key) => openmrsFetch(key, { signal: abortController.signal }));

 return (
   // render something with data
 );
}
```

#### Returns

`AbortController`

#### Defined in

[packages/framework/esm-react-utils/src/useAbortController.ts:25](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useAbortController.ts#L25)

___

### useDebounce

▸ **useDebounce**<`T`\>(`value`, `delay?`): `T`

This hook debounces a state variable. That state variable can then be used as the
value of a controlled input, while the return value of this hook is used for making
a request.

**`example`**
```tsx
import { useDebounce } from "@openmrs/esm-framework";

function MyComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);
  const swrResult = useSWR(`/api/search?q=${debouncedSearchTerm}`)

 return (
   <Search
     labelText={t('search', 'Search')}
     onChange={(e) => setSearchTerm(e.target.value)}
     value={searchTerm}
   />
 )
}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `T` | `undefined` | The value that will be used to set `debounceValue` |
| `delay` | `number` | `300` | The number of milliseconds to wait before updating `debounceValue` |

#### Returns

`T`

The debounced value

#### Defined in

[packages/framework/esm-react-utils/src/useDebounce.ts:32](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useDebounce.ts#L32)

___

### useOpenmrsSWR

▸ **useOpenmrsSWR**<`DataType`, `ErrorType`\>(`key`, `options?`): `SWRResponse`<`FetchResponse`<`DataType`\>, `ErrorType`, `undefined` \| `SWRConfiguration`<`FetchResponse`<`DataType`\>, `ErrorType`, `BareFetcher`<`FetchResponse`<`DataType`\>\>\>\>

**`beta`**

This hook is intended to simplify using openmrsFetch in useSWR, while also ensuring that
all useSWR usages properly use an abort controller, so that fetch requests are cancelled
if the React component unmounts.

**`example`**
```tsx
import { useOpenmrsSWR } from "@openmrs/esm-framework";

function MyComponent() {
 const { data } = useOpenmrsSWR(key);

 return (
   // render something with data
 );
}
```

Note that if you are using a complex SWR key you must provide a url function to the options parameter,
which translates the key into a URL to be sent to `openmrsFetch()`

**`example`**
```tsx
import { useOpenmrsSWR } from "@openmrs/esm-framework";

function MyComponent() {
 const { data } = useOpenmrsSWR(['key', 'url'], { url: (key) => key[1] });

 return (
   // render something with data
 );
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DataType` | `any` |
| `ErrorType` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Key`](API.md#key) | The SWR key to use |
| `options` | [`UseOpenmrsSWROptions`](API.md#useopenmrsswroptions) | An object of optional parameters to provide, including a [FetchConfig](interfaces/FetchConfig.md) object   to pass to [openmrsFetch](API.md#openmrsfetch) or options to pass to SWR |

#### Returns

`SWRResponse`<`FetchResponse`<`DataType`\>, `ErrorType`, `undefined` \| `SWRConfiguration`<`FetchResponse`<`DataType`\>, `ErrorType`, `BareFetcher`<`FetchResponse`<`DataType`\>\>\>\>

#### Defined in

[packages/framework/esm-react-utils/src/useOpenmrsSWR.ts:70](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-react-utils/src/useOpenmrsSWR.ts#L70)

___

## Workspace Functions

### closeWorkspace

▸ **closeWorkspace**(`name`, `options?`): `boolean`

Function to close an opened workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Workspace registration name |
| `options` | [`CloseWorkspaceOptions`](interfaces/CloseWorkspaceOptions.md) | Options to close workspace |

#### Returns

`boolean`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:432](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L432)

___

### launchWorkspace

▸ **launchWorkspace**<`T`\>(`name`, `additionalProps?`): `void`

This launches a workspace by its name. The workspace must have been registered.
Workspaces should be registered in the `routes.json` file.

For the workspace to appear, there must be either a `<WorkspaceOverlay />` or
a `<WorkspaceWindow />` component rendered.

The behavior of this function is as follows:

- If no workspaces are open, or if no other workspaces with the same type are open,
  it will be opened and focused.
- If a workspace with the same name is already open, it will be displayed/focused,
  if it was not already.
- If a workspace is launched and a workspace which cannot be hidden is already open,
 a confirmation modal will pop up warning about closing the currently open workspace.
- If another workspace with the same type is open, the workspace will be brought to
  the front and then a confirmation modal will pop up warning about closing the opened
  workspace

Note that this function just manipulates the workspace store. The UI logic is handled
by the components that display workspaces.

Additional props can be passed to the workspace component being launched. Passing a
prop named `workspaceTitle` will override the title of the workspace.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` \| [`DefaultWorkspaceProps`](interfaces/DefaultWorkspaceProps.md) = [`DefaultWorkspaceProps`](interfaces/DefaultWorkspaceProps.md) & { `[key: string]`: `any`;  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the workspace to launch |
| `additionalProps?` | `Omit`<`T`, keyof [`DefaultWorkspaceProps`](interfaces/DefaultWorkspaceProps.md)\> & { `workspaceTitle?`: `string`  } | Props to pass to the workspace component being launched. Passing          a prop named `workspaceTitle` will override the title of the workspace. |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:296](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L296)

___

### launchWorkspaceGroup

▸ **launchWorkspaceGroup**(`groupName`, `args`): `void`

Launches a workspace group with the specified name and configuration.
If there are any open workspaces, it will first close them before launching the new workspace group.

**`example`**
launchWorkspaceGroup("myGroup", {
  state: initialState,
  onWorkspaceGroupLaunch: () => console.log("Workspace group launched"),
  workspaceGroupCleanup: () => console.log("Cleaning up workspace group")
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupName` | `string` | The name of the workspace group to launch |
| `args` | `LaunchWorkspaceGroupArg` | Configuration object for launching the workspace group |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:210](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L210)

___

### navigateAndLaunchWorkspace

▸ **navigateAndLaunchWorkspace**(`__namedParameters`): `void`

Use this function to navigate to a new page and launch a workspace on that page.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.additionalProps?` | `object` |
| `__namedParameters.contextKey` | `string` |
| `__namedParameters.targetUrl` | `string` |
| `__namedParameters.workspaceName` | `string` |

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:389](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L389)

___

### useWorkspaces

▸ **useWorkspaces**(): [`WorkspacesInfo`](interfaces/WorkspacesInfo.md)

#### Returns

[`WorkspacesInfo`](interfaces/WorkspacesInfo.md)

#### Defined in

[packages/framework/esm-styleguide/src/workspaces/workspaces.ts:543](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/workspaces/workspaces.ts#L543)
