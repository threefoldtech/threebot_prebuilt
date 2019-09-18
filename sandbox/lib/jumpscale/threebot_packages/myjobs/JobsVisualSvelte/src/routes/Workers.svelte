<script>
  import { getWorkers } from "../data";
  import { onMount } from "svelte";
  import {
    link,
    push,
    pop,
    replace,
    location,
    querystring
  } from "svelte-spa-router";

  const state = {
    RESULT: "OK",
    ERROR: "ERROR",
    NEW: "NEW",
    HALTED: "HALTED"
  };
  var successCount = 0;
  var failureCount = 0;
  var newCount = 0;
  const status = { ONLINE: "online", OFFLINE: "offline" };
  let workers = [];

  onMount(async () => {
    getWorkers().then(function(data) {
      if (!data) {
        return;
      }
      console.log(`DATA : ${data}`);
      //Todo:The data will need to be parsed to json
      workers = JSON.parse(data).workers;

      workers.forEach(worker => {
        worker.state = worker.state.toUpperCase();
      });
      //Calculating the statstics relatedt to the workers
      statsticsCalculation();
      function statsticsCalculation() {
        workers.forEach(worker => {
          if (worker.state == state.RESULT) successCount++;
          else if (worker.state == state.ERROR) failureCount++;
          else if (worker.state == state.NEW) newCount++;
          else {
          }
        });
      }
    });
  });
</script>

<style>
  .mt-3 {
    margin-top: 20px;
  }
</style>

<!--[Header]-->
<h1>Workers ({workers.length})</h1>
<!--
<div class="row mt-3">

  <div class="col-xs-12">
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center" scope="col">Total Workers</th>
          <th class="text-center" scope="col">New Workers</th>
          <th class="text-center" scope="col">Success Workers</th>
          <th class="text-center" scope="col">Failure Workers</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <td>{workers.length}</td>
        <td>{newCount}</td>
        <td>{successCount}</td>
        <td>{failureCount}</td>
      </tbody>
    </table>
  </div>
</div>
-->
{#if workers && workers.length > 0}
  <!--[Containder]-->
  <div>
    <div class="row">
      <!--[Workers-Data]-->
      <div class="col-xs-12">
        <table class="table table-striped">
          <!--[Workers-Data-Headers]-->
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th scope="col">#</th>
              <th scope="col">State</th>
              <th scope="col">Halt</th>
              <th scope="col">Pid</th>
              <th scope="col">Current Job</th>
              <th scope="col">Last Update</th>
              <th scope="col">Time Start</th>
              <th scope="col">Timeout</th>
              <th scope="col">Type</th>
              <th scope="col">Error</th>

            </tr>
          </thead>
          <!--[Workers-Data-Body]-->
          <tbody>
            {#each workers as worker, i}
              <tr>
                <!-- <th scope="row">{i + 1}</th> -->
                <td>{worker.id}</td>

                {#if worker.state == state.RESULT}
                  <td>
                    <span class="label label-pill label-success">
                      {worker.state}
                    </span>
                  </td>
                {:else if worker.state == state.ERROR}
                  <td>
                    <span class="label label-pill label-danger">
                      {worker.state}
                    </span>
                  </td>
                {:else if worker.state == state.NEW}
                  <td>
                    <span class="label label-pill label-primary">
                      {worker.state}
                    </span>
                  </td>
                {:else}
                  <td>
                    <span class="label label-pill label-warning">
                      {worker.state}
                    </span>
                  </td>
                {/if}
                <td>{worker.halt}</td>
                <td>{worker.pid}</td>
                <td>{worker.current_job}</td>
                <td>{worker.last_update}</td>
                <td>{worker.time_start}</td>
                <td>{worker.timeout}</td>
                <td>{worker.type}</td>
                <td>{worker.error}</td>

              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>

  </div>
{:else}
  <!-- this block renders when photos.length === 0 -->
  <!-- <p>loading...</p> -->
  <div class="text-center">
    <img src={'/img/loader.gif'} class="img-fluid" alt="Responsive image" />
  </div>
{/if}
