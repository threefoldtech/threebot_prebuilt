<script>
  import { deleteAlert } from "../data";
  import Model from "./Model.svelte"
  // import jquery from 'jquery';

  export let alerts;
  $: alerts;
  console.log("alerts in Alerts component", alerts);
  const severity = {
    CRITICAL: "CRITICAL",
    MAJOR: "MAJOR",
    MINOR: "MINOR",
    WARNING: "WARNING",
    INDETERMINATE: "INDETERMINATE"
  };
  function onDeleteAlert(alertId) {
    //Call gedis actor
    deleteAlert(alertId)
      .then(resp => {
        let toBeDeletedArrayIndex = getIndexOfAlert(alertId);
        alerts.splice(toBeDeletedArrayIndex, 1);
        alerts = [...alerts];
        console.log("Delete btn is pushed", alerts);
      })
      .catch(err => {
        console.log("Delete btn is pushed BUt gedis didn't delete");
        console.log(err);
      });
  }

  function getIndexOfAlert(alertId) {
    for (let i = 0; i < alerts.length; i++) {
      if (alerts[i].id == alertId) return i;
    }
  }
  function showAlertDetailsModel(alertIndex) {
    // jquery('#exampleModalLabel').modal('show')
    var jq = jQuery.noConflict();
    jq("#exampleModal").modal("show");
  }
</script>

<div>
  <div class="row">
    <!--[Tasks-Data]-->
    <div class="col-sm-12 _m-4">
      <!-- content here -->
      <table class="table table-striped">
        <!--[Tasks-Data-Headers]-->
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Severity</th>
            <th scope="col">Status</th>
            <th scope="col">Time</th>
            <th scope="col">Dupl.</th>
            <th scope="col">Environment</th>
            <th scope="col">Service</th>
            <th scope="col">Resource</th>
            <th scope="col">Event</th>
            <th scope="col">Value</th>
            <th scope="col">Message Type</th>
            <!-- <th scope="col">Text</th> -->
            <th scope="col" class="text-center">Action</th>
          </tr>
        </thead>
        <!--[Tasks-Data-Body]-->
        <tbody>

          <!-- content here -->
          {#each alerts as myAlert, i}
            <!-- <tr on:click={() => showAlertDetailsModel(i)}> -->
            <tr>
              <th scope="row">{i + 1}</th>
              {#if myAlert.severity == severity.CRITICAL}
                <td>
                  <span class="badge badge-danger">{myAlert.severity}</span>
                </td>
              {:else if myAlert.severity == severity.MAJOR}
                <td>
                  <span class="badge badge-info">{myAlert.severity}</span>
                </td>
              {:else if myAlert.severity == severity.WARNING}
                <td>
                  <span class="badge badge-warning">{myAlert.severity}</span>
                </td>
              {:else if myAlert.severity == severity.MINOR}
                <td>
                  <span class="badge badge-secondary">{myAlert.severity}</span>
                </td>
              {:else}
                <td>
                  <span class="badge badge-primary">{myAlert.severity}</span>
                </td>
              {/if}
              <td>{myAlert.status}</td>
              <td>{myAlert.time}</td>
              <td>{myAlert.dupl}</td>
              <td>{myAlert.environment}</td>
              <td>{myAlert.service}</td>
              <td>{myAlert.resource}</td>
              <td>{myAlert.event}</td>
              <td>{myAlert.value}</td>
              <td>{myAlert.messageType}</td>
              <!-- <td>{myAlert.text}</td> -->
              <td>
                <!--[Actions]-->
                <div class="d-flex d-flex justify-content-center">
                  <!--[Delete-Alert-BTN]-->
                  <div class="mr-1">
                    <button
                      type="button"
                      class="btn btn-primary pointer"
                      on:click={() => onDeleteAlert(myAlert.id)}>
                      Delete
                    </button>
                  </div>
                  <!--[Details-Alert-BTN]-->
                  <div>
                    <button
                      type="button"
                      class="btn btn-warning pointer"
                      data-toggle="modal"
                      data-target="#modal{i}">
                      Details
                    </button>
                  </div>
                </div>
              </td>
              <!--[Modal]-->
             <div>
             <Model {myAlert} index={i}/>
             </div>
            </tr>
          {/each}
        </tbody>
      </table>

    </div>
  </div>
</div>
