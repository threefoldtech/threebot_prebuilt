<script>
  import Navigation from "./Navigation.svelte";
  import Alerts from "./components/Alerts.svelte";
  import { getAlerts, deleteAll } from "./data";

  let alerts;
  let searchText = "";
  let formatedAlerts = "";
  let currentFilteredAlerts;
  let isAlertsLoaded = false;
  let servicesLoading = true;
  let isAllAlertsDeleted = false;
  const environments = {
    ALL: "ALL",
    PROD: "PRODUCTION",
    DEV: "DEVELOPMENT",
    INFRA: "INFRASTRUCTURE"
  };

  let services;
  const severity = {
    ALL: "ALL",
    CRITICAL: "CRITICAL",
    MAJOR: "MAJOR",
    MINOR: "MINOR",
    WARNING: "WARNING",
    INDETERMINATE: "INDETERMINATE"
  };
  const messageTypes = {
    ALL: "ALL",
    ERROR: "ERROR",
    INFORMATION: "INFORMATION",
    WARNING: "WARNING"
  };
  const status = { ALL: "ALL", OPEN: "OPEN", CLOSED: "CLOSED",NEW:"NEW" };
  let currentFilters = {
    service: "ALL",
    messageType: messageTypes.ALL,
    status: status.ALL
  };

  document.addEventListener("DOMContentLoaded", function(event) {
    // your page initialization code here
    // the DOM will be available here
    var tab = document.getElementById("pills-all-tab");
    tab.click();
  });
  //Get Data from the API
  function updateAlerts(environment) {
    isAlertsLoaded = false;
    isAllAlertsDeleted = false; //The alerts all available now and not deleted (reintialize the state)
    console.log("chosed environemnt", environment);
    alerts = [];

    getAlerts(environment)
      .then(response => {
       // let parsedJson = JSON.parse(response);
        let parsedJson = response;
        // handle success

        console.log("response in success", parsedJson.alerts);
        alerts = parsedJson.alerts;
        formatedAlerts = convertDataToUpperCase(parsedJson.alerts);
        filterAlerts(formatedAlerts);
        getServices();
        isAlertsLoaded = true;
        console.log("alerts after filtering", parsedJson.alerts);
      })
      .catch(err => {
        console.log("error ", err);
      });

    //   .get("http://localhost:8080/api/alerts/get-alerts/" + environment)
  }

  function updateFilters(selectedService, selectedMessageType, selectedState) {
    currentFilters = {
      service: selectedService,
      messageType: selectedMessageType,
      status: selectedState
    };
    filterAlerts(formatedAlerts);
  }

  function convertDataToUpperCase(alerts) {
    for (let i = 0; i < alerts.length; i++) {
      alerts[i].severity = alerts[i].severity.toUpperCase();
      alerts[i].service = alerts[i].service.toUpperCase();
      alerts[i].status = alerts[i].status.toUpperCase();
      alerts[i].messageType = alerts[i].messageType.toUpperCase();
    }
    return alerts;
  }

  function filterAlerts(filteredAlerts) {
    if (currentFilters.service != "ALL")
      filteredAlerts = filteredAlerts.filter(singelAlert => {
        return singelAlert.service == currentFilters.service;
      });
    if (currentFilters.messageType != messageTypes.ALL)
      filteredAlerts = filteredAlerts.filter(singelAlert => {
        return singelAlert.messageType == currentFilters.messageType;
      });
    if (currentFilters.status != status.ALL)
      filteredAlerts = filteredAlerts.filter(singelAlert => {
        return singelAlert.status == currentFilters.status;
      });
    currentFilteredAlerts = filteredAlerts; //keeping the current filtered alerts
    alerts = filteredAlerts; //update the alerts to update the Rendering
  }

  $: if (searchText) {
    console.log(searchText);
    searchAlertsText();
  }
  function searchAlertsText() {
    console.log("alerts in search", currentFilteredAlerts);
    alerts = currentFilteredAlerts.filter(singleAlert => {
      return singleAlert.text.includes(searchText);
    });
  }
  function resetFilters() {
    currentFilters = {
      service: "ALL",
      messageType: messageTypes.ALL,
      status: status.ALL
    };
    document.getElementById("InputSearch").value = "";
    filterAlerts(formatedAlerts);
  }
  function getServices() {
    servicesLoading = true;
    services = formatedAlerts.map(singleAlert => singleAlert.service);
    //services = [...new Set(services)]; //Making services unique
    services = Array.from([...new Set(services)]); //Making services unique and convert it from set to array
    console.log("the type ", typeof services);
    services.unshift("ALL"); //Add "All" in the begining of the array
    console.log("services", services);
    servicesLoading = false;
  }

  function deleteAllAlerts() {
    deleteAll()
      .then(res => {
        console.log("response in case delete all after handler",res);
        alerts = [];
        isAllAlertsDeleted = true;
        console.log("successful delted all alerts")
      })
      .catch(err =>{
        console.log("error while deleting all alerts",err);
      });
  }
</script>

<style>
.search-width{
  width: 350px;
}

</style>

<div>
  <Navigation />
</div>

<!--[Container]-->
<div class="container-fluid">
  <!--[Title]-->
  <div class="m-3 text-center">
    <h1>Central Alert System</h1>
  </div>
  <!--[Filters]-->
  <div class="row  m-5">
    <div class="col-sm-12">
      <div class="d-flex justify-content-start">
      <!--[Search]-->
        <div class="mx-4 search-width">
          <input
            type="search"
            class="form-control"
            id="InputSearch"
            placeholder="Search text"
            bind:value={searchText} />

        </div>
        <!--[Services]-->
        <!-- content here -->
        <div class="dropdown mx-2">
          <button
            class="btn btn-light dropdown-toggle pointer"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            disabled={servicesLoading}>
            Services
          </button>
          {#if services && services.length > 0}
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {#each services as service}
                <!-- content here -->
                <a
                  class="dropdown-item"
                  href="#"
                  on:click={() => updateFilters(service, currentFilters.messageType, currentFilters.status)}>
                  {service}
                </a>
              {/each}
            </div>
          {/if}
        </div>
        <!--[Message-Type]-->
        <div class="dropdown mx-2">
          <button
            class="btn btn-light dropdown-toggle pointer"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            disabled={servicesLoading}>
            Message type
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              class="dropdown-item"
              href="#"
              on:click={() => updateFilters(currentFilters.service, messageTypes.ALL, currentFilters.status)}>
              All
            </a>
            <a
              class="dropdown-item"
              href="#"
              on:click={() => updateFilters(currentFilters.service, messageTypes.ERROR, currentFilters.status)}>
              Error
            </a>
            <a
              class="dropdown-item"
              href="#"
              on:click={() => updateFilters(currentFilters.service, messageTypes.INFORMATION, currentFilters.status)}>
              Information
            </a>
            <a
              class="dropdown-item"
              href="#"
              on:click={() => updateFilters(currentFilters.service, messageTypes.WARNING, currentFilters.status)}>
              Warning
            </a>

          </div>
        </div>
        <!--[Status]-->
        <div class="dropdown mx-2">
          <button
            class="btn btn-light dropdown-toggle pointer"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            disabled={servicesLoading}>
            Status
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              class="dropdown-item"
              href="#"
              on:click={() => updateFilters(currentFilters.service, currentFilters.messageType, status.ALL)}>
              All
            </a>
             <a
              class="dropdown-item"
              href="#"
              on:click={() => updateFilters(currentFilters.service, currentFilters.messageType, status.NEW)}>
              New
            </a>
            <a
              class="dropdown-item"
              href="#"
              on:click={() => updateFilters(currentFilters.service, currentFilters.messageType, status.OPEN)}>
              Open
            </a>
            <a
              class="dropdown-item"
              href="#"
              on:click={() => updateFilters(currentFilters.service, currentFilters.messageType, status.CLOSED)}>
              Closed
            </a>

          </div>
        </div>
        
        <!--[Reset-Filter]-->
        <div class="mx-2">
          <button
            type="button"
            class="btn btn-light pointer"
            on:click={() => resetFilters()}
            disabled={servicesLoading}>
            Reset Filters
          </button>
        </div>
        <!--[Delete-Alerts]-->
        <div class="mx-2">
          <button
            type="button"
            class="btn btn-light pointer"
            on:click={() => deleteAllAlerts()}
            disabled={servicesLoading}>
            Delete Alerts
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--[Tabs]-->
  <div class="row mt-4">
    <div class="col-sm-12  ml-4">
      <div>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-all-tab"
              data-toggle="pill"
              href="#pills-all"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
              on:click={() => updateAlerts(environments.ALL)}>
              All
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="infra-profile-tab"
              data-toggle="pill"
              href="#pills-infra"
              role="tab"
              aria-controls="pills-infra"
              aria-selected="false"
              on:click={() => updateAlerts(environments.INFRA)}>
              Infrastructure
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-prod-tab"
              data-toggle="pill"
              href="#pills-prod"
              role="tab"
              aria-controls="pills-prod"
              aria-selected="false"
              on:click={() => updateAlerts(environments.PROD)}>
              Production
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-development-tab"
              data-toggle="pill"
              href="#pills-development"
              role="tab"
              aria-controls="pills-development"
              aria-selected="false"
              on:click={() => updateAlerts(environments.DEV)}>
              Development
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab" />
          <div
            class="tab-pane fade"
            id="pills-infra"
            role="tabpanel"
            aria-labelledby="pills-infra-tab" />
          <div
            class="tab-pane fade"
            id="pills-prod"
            role="tabpanel"
            aria-labelledby="pills-prod-tab" />
          <div
            class="tab-pane fade"
            id="pills-development"
            role="tabpanel"
            aria-labelledby="pills-development-tab" />
        </div>
      </div>

    </div>
  </div>
  <!--[Alerts]-->
  {#if alerts && alerts != '' && isAlertsLoaded && !isAllAlertsDeleted}
    <!-- content here -->
    <div class="row">
      <div class="col-sm-12">
        <Alerts {alerts} />
      </div>
    </div>
  {:else if !isAlertsLoaded && !isAllAlertsDeleted}
    <div class="text-center">
      <img src={'/img/loader.gif'} class="img-fluid" alt="Responsive image" />
    </div>
  {:else if isAlertsLoaded && isAllAlertsDeleted}
    <div class="mt-5 text-center">
      <h2>All the alerts have been deleted.</h2>
    </div>
  {:else}
    <div class="mt-5 text-center">
      <h2>There is no alerts matching your criteria</h2>
    </div>
  {/if}
</div>
