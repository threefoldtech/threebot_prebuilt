<script>
  import TasksRendering from "./TasksRendering.svelte";
  import { getJobs } from "../data";
  import { onMount } from "svelte";

  let allTasks = [];
  //Make all the states UpperCase
  allTasks.forEach(task => {
    task.state = task.state.toUpperCase();
  });

  onMount(async () => {
    getJobs().then(function(data) {
      console.log(`DATA : ${data}`);

      if (!data) {
        return;
      }
      allTasks = JSON.parse(data).jobs;
      //   allTasks = data.jobs;
      //Make all the states UpperCase
      allTasks.forEach(task => {
        task.state = task.state.toUpperCase();
      });
    });
  });
</script>

<style>

</style>

<!--[Header]-->
<h1>Tasks</h1>
<TasksRendering {allTasks} />
