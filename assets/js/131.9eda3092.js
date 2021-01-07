(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{682:function(t,e,a){"use strict";a.r(e);var r=a(9),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[a("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iUHJvZHVjdF9JY29ucyIgZGF0YS1uYW1lPSJQcm9kdWN0IEljb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNhZWNiZmE7fS5jbHMtMSwuY2xzLTIsLmNscy0ze2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7ZmlsbDojNjY5ZGY2O30uY2xzLTN7ZmlsbDojNDI4NWY0O308L3N0eWxlPjwvZGVmcz48dGl0bGU+SWNvbl8yNHB4X0NvbG9yX0JpZ1F1ZXJ5PC90aXRsZT48ZyBpZD0iU2hhcGUiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYuNzMsMTAuODN2Mi42M0E0LjkxLDQuOTEsMCwwLDAsOC40NCwxNS4yVjEwLjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTkuODksOC40MXY3LjUzQTcuNjIsNy42MiwwLDAsMCwxMSwxNiw4LDgsMCwwLDAsMTIsMTZWOC40MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMy42NCwxMS44NnYzLjI5YTUsNSwwLDAsMCwxLjctMS44MlYxMS44NloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNy43NCwxNi4zMmwtMS40MiwxLjQyYS40Mi40MiwwLDAsMCwwLC42bDMuNTQsMy41NGEuNDIuNDIsMCwwLDAsLjU5LDBsMS40My0xLjQzYS40Mi40MiwwLDAsMCwwLS41OWwtMy41NC0zLjU0YS40Mi40MiwwLDAsMC0uNiwwIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTEsMmE5LDksMCwxLDAsOSw5LDksOSwwLDAsMC05LTltMCwxNS42OUE2LjY4LDYuNjgsMCwxLDEsMTcuNjksMTEsNi42OCw2LjY4LDAsMCwxLDExLDE3LjY5Ii8+PC9nPjwvc3ZnPg==",alt:"UpdateDataset"}}),t._v(" UpdateDataset\n")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.bigquery.UpdateDataset"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Update a dataset.")])]),t._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acl"}},[t._v("#")]),t._v(" "),a("code",[t._v("acl")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The dataset's access control configuration")])]),t._v(" "),a("h3",{attrs:{id:"defaultencryptionconfiguration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultencryptionconfiguration"}},[t._v("#")]),t._v(" "),a("code",[t._v("defaultEncryptionConfiguration")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The default encryption key for all tables in the dataset")])]),t._v(" "),a("p",[t._v("Once this property is set, all newly-created partitioned tables in the dataset will have encryption key set to this value, unless table creation request (or query) overrides the key.")]),t._v(" "),a("h3",{attrs:{id:"defaultencryptionconfiguration-kmskeyname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultencryptionconfiguration-kmskeyname"}},[t._v("#")]),t._v(" "),a("code",[t._v("defaultEncryptionConfiguration.kmsKeyName")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("h3",{attrs:{id:"defaultpartitionexpirationms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultpartitionexpirationms"}},[t._v("#")]),t._v(" "),a("code",[t._v("defaultPartitionExpirationMs")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("[Optional] The default partition expiration time for all partitioned tables in the dataset, in milliseconds")])]),t._v(" "),a("p",[t._v("Once this property is set, all newly-created partitioned tables in the  dataset will has an expirationMs property in the timePartitioning settings set to this value. Changing the value only affect new tables, not existing ones. The storage in a partition will have an expiration time of its partition time plus this value. Setting this property overrides the use of defaultTableExpirationMs for partitioned tables: only one of defaultTableExpirationMs and defaultPartitionExpirationMs will be used for any new partitioned table. If you provide an explicit timePartitioning.expirationMs when creating or updating a partitioned table, that value takes precedence over the default partition expiration time indicated by this property. The value may be null.")]),t._v(" "),a("h3",{attrs:{id:"defaulttablelifetime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulttablelifetime"}},[t._v("#")]),t._v(" "),a("code",[t._v("defaultTableLifetime")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The default lifetime of all tables in the dataset, in milliseconds")])]),t._v(" "),a("p",[t._v("The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property. This property is experimental and might be subject to change or removed.")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" "),a("code",[t._v("description")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Description")])]),t._v(" "),a("p",[t._v("A user-friendly description for the dataset.")]),t._v(" "),a("h3",{attrs:{id:"friendlyname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#friendlyname"}},[t._v("#")]),t._v(" "),a("code",[t._v("friendlyName")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("A user-friendly name for the dataset")])]),t._v(" "),a("h3",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[t._v("#")]),t._v(" "),a("code",[t._v("labels")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The dataset's labels")])]),t._v(" "),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" "),a("code",[t._v("location")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The geographic location where the dataset should reside")])]),t._v(" "),a("p",[t._v("This property is experimental and might be subject to change or removed."),a("br"),t._v("\nSee "),a("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[t._v("Dataset      Location")])]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" "),a("code",[t._v("name")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("blockquote",[a("p",[t._v("The dataset's user-defined id")])]),t._v(" "),a("h3",{attrs:{id:"projectid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),a("code",[t._v("projectId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP project id")])]),t._v(" "),a("h3",{attrs:{id:"retryauto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retryauto"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryAuto")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" ====")]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("h3",{attrs:{id:"retrymessages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrymessages"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryMessages")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[due to concurrent update]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The message that are valid for a automatic retry.")])]),t._v(" "),a("p",[t._v("Message is tested as a substring of the full message and case insensitive")]),t._v(" "),a("h3",{attrs:{id:"retryreasons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retryreasons"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryReasons")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[rateLimitExceeded, jobBackendError]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The reason that are valid for a automatic retry.")])]),t._v(" "),a("h3",{attrs:{id:"scopes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),a("code",[t._v("scopes")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP scopes to used")])]),t._v(" "),a("h3",{attrs:{id:"serviceaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),a("code",[t._v("serviceAccount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP service account key")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[t._v("#")]),t._v(" "),a("code",[t._v("dataset")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The dataset's user-defined id")])]),t._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("description")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("A user-friendly description for the dataset")])]),t._v(" "),a("h3",{attrs:{id:"friendlyname-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#friendlyname-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("friendlyName")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("A user-friendly name for the dataset")])]),t._v(" "),a("h3",{attrs:{id:"location-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("location")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The geographic location where the dataset should reside")])]),t._v(" "),a("p",[t._v("This property is experimental and might be subject to change or removed."),a("br"),t._v("\nSee "),a("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[t._v("Dataset      Location")])]),t._v(" "),a("h3",{attrs:{id:"project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[t._v("#")]),t._v(" "),a("code",[t._v("project")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP project id")])])])}),[],!1,null,null,null);e.default=i.exports}}]);