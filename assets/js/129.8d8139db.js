(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{684:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[s("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iUHJvZHVjdF9JY29ucyIgZGF0YS1uYW1lPSJQcm9kdWN0IEljb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNhZWNiZmE7fS5jbHMtMSwuY2xzLTIsLmNscy0ze2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7ZmlsbDojNjY5ZGY2O30uY2xzLTN7ZmlsbDojNDI4NWY0O308L3N0eWxlPjwvZGVmcz48dGl0bGU+SWNvbl8yNHB4X0NvbG9yX0JpZ1F1ZXJ5PC90aXRsZT48ZyBpZD0iU2hhcGUiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYuNzMsMTAuODN2Mi42M0E0LjkxLDQuOTEsMCwwLDAsOC40NCwxNS4yVjEwLjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTkuODksOC40MXY3LjUzQTcuNjIsNy42MiwwLDAsMCwxMSwxNiw4LDgsMCwwLDAsMTIsMTZWOC40MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMy42NCwxMS44NnYzLjI5YTUsNSwwLDAsMCwxLjctMS44MlYxMS44NloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNy43NCwxNi4zMmwtMS40MiwxLjQyYS40Mi40MiwwLDAsMCwwLC42bDMuNTQsMy41NGEuNDIuNDIsMCwwLDAsLjU5LDBsMS40My0xLjQzYS40Mi40MiwwLDAsMCwwLS41OWwtMy41NC0zLjU0YS40Mi40MiwwLDAsMC0uNiwwIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTEsMmE5LDksMCwxLDAsOSw5LDksOSwwLDAsMC05LTltMCwxNS42OUE2LjY4LDYuNjgsMCwxLDEsMTcuNjksMTEsNi42OCw2LjY4LDAsMCwxLDExLDE3LjY5Ii8+PC9nPjwvc3ZnPg==",alt:"Query"}}),t._v(" Query\n")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.bigquery.Query"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Execute BigQuery SQL query in a specific BigQuery database")])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("blockquote",[s("p",[t._v("Create a table with a custom query")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.bigquery.Query"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destinationTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_project.my_dataset.my_table"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("writeDisposition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WRITE_APPEND\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n  SELECT \n    "hello" as string,\n    NULL AS `nullable`,\n    1 as int,\n    1.25 AS float,\n    DATE("2008-12-25") AS date,\n    DATETIME "2008-12-25 15:30:00.123456" AS datetime,\n    TIME(DATETIME "2008-12-25 15:30:00.123456") AS time,\n    TIMESTAMP("2008-12-25 15:30:00.123456") AS timestamp,\n    ST_GEOGPOINT(50.6833, 2.9) AS geopoint,\n    ARRAY(SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3) AS `array`,\n    STRUCT(4 AS x, 0 AS y, ARRAY(SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3) AS z) AS `struct`')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Execute a query and fetch results sets on another task")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fetch\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.task.gcp.bigquery.Query\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    SELECT 1 as id, "John" as name\n    UNION ALL\n    SELECT 2 as id, "Doe" as name')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fetched"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    {{#each outputs.fetch.rows}}\n    id : {{ this.id }}, name: {{ this.name }}\n    {{/each}}")]),t._v("\n")])])]),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("h3",{attrs:{id:"clusteringfields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clusteringfields"}},[t._v("#")]),t._v(" "),s("code",[t._v("clusteringFields")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The clustering specification for the destination table")])]),t._v(" "),s("h3",{attrs:{id:"createdisposition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createdisposition"}},[t._v("#")]),t._v(" "),s("code",[t._v("createDisposition")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Whether the job is allowed to create tables")])]),t._v(" "),s("h3",{attrs:{id:"destinationtable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destinationtable"}},[t._v("#")]),t._v(" "),s("code",[t._v("destinationTable")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The table where to put query results")])]),t._v(" "),s("p",[t._v("If not provided a new table is created.")]),t._v(" "),s("h3",{attrs:{id:"fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" "),s("code",[t._v("fetch")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("boolean")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Whether to Fetch the data from the query result to the task output")])]),t._v(" "),s("h3",{attrs:{id:"fetchone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetchone"}},[t._v("#")]),t._v(" "),s("code",[t._v("fetchOne")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("boolean")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Whether to Fetch only one data row from the query result to the task output")])]),t._v(" "),s("h3",{attrs:{id:"legacysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacysql"}},[t._v("#")]),t._v(" "),s("code",[t._v("legacySql")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("boolean")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Whether to use BigQuery's legacy SQL dialect for this query")])]),t._v(" "),s("p",[t._v("By default this property is set to false.")]),t._v(" "),s("h3",{attrs:{id:"location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" "),s("code",[t._v("location")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The geographic location where the dataset should reside")])]),t._v(" "),s("p",[t._v("This property is experimental and might be subject to change or removed.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[t._v("Dataset Location")])]),t._v(" "),s("h3",{attrs:{id:"projectid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),s("code",[t._v("projectId")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The GCP project id")])]),t._v(" "),s("h3",{attrs:{id:"retryauto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retryauto"}},[t._v("#")]),t._v(" "),s("code",[t._v("retryAuto")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" ====")]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("h3",{attrs:{id:"retrymessages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrymessages"}},[t._v("#")]),t._v(" "),s("code",[t._v("retryMessages")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("[due to concurrent update]")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The message that are valid for a automatic retry.")])]),t._v(" "),s("p",[t._v("Message is tested as a substring of the full message and case insensitive")]),t._v(" "),s("h3",{attrs:{id:"retryreasons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retryreasons"}},[t._v("#")]),t._v(" "),s("code",[t._v("retryReasons")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("[rateLimitExceeded, jobBackendError]")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The reason that are valid for a automatic retry.")])]),t._v(" "),s("h3",{attrs:{id:"schemaupdateoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schemaupdateoptions"}},[t._v("#")]),t._v(" "),s("code",[t._v("schemaUpdateOptions")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("[Experimental] Options allowing the schema of the destination table to be updated as a side effect of the query job")])]),t._v(" "),s("p",[t._v("Schema update options are supported in two cases: * when writeDisposition is WRITE_APPEND;")]),t._v(" "),s("ul",[s("li",[t._v("when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators."),s("br"),t._v("\nFor normal tables, WRITE_TRUNCATE will always overwrite the schema.")])]),t._v(" "),s("h3",{attrs:{id:"scopes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),s("code",[t._v("scopes")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The GCP scopes to used")])]),t._v(" "),s("h3",{attrs:{id:"serviceaccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),s("code",[t._v("serviceAccount")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The GCP service account key")])]),t._v(" "),s("h3",{attrs:{id:"sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" "),s("code",[t._v("sql")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The sql query to run")])]),t._v(" "),s("h3",{attrs:{id:"store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" "),s("code",[t._v("store")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("boolean")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Whether to store the data from the query result into an ion serialized data file")])]),t._v(" "),s("h3",{attrs:{id:"timepartitioningfield"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timepartitioningfield"}},[t._v("#")]),t._v(" "),s("code",[t._v("timePartitioningField")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The time partitioning specification for the destination table")])]),t._v(" "),s("h3",{attrs:{id:"writedisposition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writedisposition"}},[t._v("#")]),t._v(" "),s("code",[t._v("writeDisposition")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The action that should occur if the destination table already exists")])]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("h3",{attrs:{id:"jobid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jobid"}},[t._v("#")]),t._v(" "),s("code",[t._v("jobId")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The job id")])]),t._v(" "),s("h3",{attrs:{id:"row"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row"}},[t._v("#")]),t._v(" "),s("code",[t._v("row")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Map containing the first row of fetched data")])]),t._v(" "),s("p",[t._v("Only populated if 'fetchOne' parameter is set to true.")]),t._v(" "),s("h3",{attrs:{id:"rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" "),s("code",[t._v("rows")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("object")])])]),t._v(" "),s("blockquote",[s("p",[t._v("List containing the fetched data")])]),t._v(" "),s("p",[t._v("Only populated if 'fetch' parameter is set to true.")]),t._v(" "),s("h3",{attrs:{id:"size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" "),s("code",[t._v("size")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("integer")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The size of the rows fetch")])]),t._v(" "),s("h3",{attrs:{id:"uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" "),s("code",[t._v("uri")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The uri of store result")])]),t._v(" "),s("p",[t._v("Only populated if 'store' is set to true.")])])}),[],!1,null,null,null);e.default=r.exports}}]);