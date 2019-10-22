<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let paste_id = $page.params.paste_id;

  import HighlightedCode from "../../components/HighlightedCode.svelte";
  import { getPaste } from "../_api";

  let highlightedCode;

  getSharedCode(paste_id);

  function getSharedCode(paste_id) {
    getPaste(paste_id)
      .then(response => {
        // handle success
        //Get the orginal code from the response to be highlighted
        let actualCode = response.data.code;
        highlightCode(actualCode);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  function highlightCode(originalCode) {
    highlightedCode = hljs.highlightAuto(originalCode).value;
  }
</script>

<div>
  <HighlightedCode {highlightedCode} />
</div>
