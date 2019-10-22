<script>
  import hljs from "highlight.js";
  import { newPaste } from "./_api";

  import HighlightedCode from "../components/HighlightedCode.svelte";

  let pasted = false;
  //   hljs.initHighlightingOnLoad();
  let shareableUrl = "";

  let originalCode = "";
  let highlightedCode = "";
  function highlightCode(originalCode) {
    highlightedCode = hljs.highlightAuto(originalCode).value;
    newPaste(originalCode)
      .then(response => {
        shareableUrl = `${window.location.href}paste/${response.data.id}`;
        pasted = true;
      })
      .catch(error => {
        console.log(error);
      });
  }

  //Copy the code
  function copyToClipboard(elementId) {
    var range = document.createRange();
    range.selectNode(document.getElementById(elementId));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
  }
  //Download the code3
  function downloadCode(data, fileName = "originalCode") {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(data)
    );
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
</script>

<h1>Create new paste</h1>

<!--[Content]-->
<div class="row">
  <div class="col-sm-12">
    {#if pasted === false}
      <textarea
        id="original-code"
        rows="25"
        cols="120"
        bind:value={originalCode} />
    {:else}
      <HighlightedCode {highlightedCode} />
    {/if}

  </div>
</div>

<!--[BTNs]-->
<div class="d-flex justify-content-between mt-4">
  <!--[Submit-BTN]-->
  <div>
    <button
      type="button"
      on:click={() => highlightCode(originalCode)}
      class="btn btn-dark btn-lg">
      Submit
    </button>
  </div>

  <div>
    <button
      type="button"
      on:click={() => (pasted = false)}
      class="btn btn-dark btn-lg">
      <i class="far fa-edit" />
      Edit
    </button>
  </div>

  <!--[Download-BTN]-->
  <div>
    <button
      type="button"
      class="btn btn-dark btn-lg"
      on:click={() => downloadCode(originalCode)}>
      Download
    </button>
  </div>
  <!--[Submit-Copy]-->
  <div>
    <button
      class="btn btn-dark btn-lg"
      on:click={() => copyToClipboard('original-code')}>
      <i class="far fa-copy" />
    </button>
  </div>
</div>
<!--[Sharabe-Link]-->
{#if shareableUrl != ''}
  <div class="row">
    <div class="col-sm-12">
      <div class="d-flex mt-5 align-items-center">
        <!--[Display-URL]-->
        <div class="h3" id="shareable-url">{shareableUrl}</div>
        <div>
          <!--[Copy-BTN]-->
          <button
            class="btn btn-grey ml-3"
            on:click={() => copyToClipboard('shareable-url')}>
            <i class="far fa-copy" />
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
