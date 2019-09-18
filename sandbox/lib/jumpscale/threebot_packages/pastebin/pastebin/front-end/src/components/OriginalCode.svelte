<script>
  import hljs from "highlight.js";
  import { newPaste } from "./data";

  import HighlightedCode from "./HighlightedCode.svelte";

  hljs.initHighlightingOnLoad();
  let shareableUrl = "";

  let originalCode = "";
  let highlightedCode = { value: "" };
  function highlightCode(originalCode) {
    highlightedCode = hljs.highlightAuto(originalCode);
    newPaste(originalCode)
      .then(function(response) {
        let parsedJson = JSON.parse(response);
        shareableUrl = `${window.location.href}#/share/${parsedJson.id}`;
      })
      .catch(function(error) {});
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

<div class="row">
  <!--[Left-Side]-->
  <div class="col-sm-6">
    <!--[Content]-->
    <div class="row">
      <div class="col-sm-12">
        <textarea
          id="original-code"
          rows="25"
          cols="95"
          bind:value={originalCode} />
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

  </div>
  <!--[Right-Side]-->
  <div class="col-sm-6">
    <HighlightedCode {highlightedCode} />
  </div>
</div>
