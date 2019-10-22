<script>
  import showdown from "showdown";
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  export let metadata = {};
  let converter = new showdown.Converter({ metadata: true });
  if (metadata.allow_footer === undefined) {
    metadata.allow_footer = true; // handeling all blogs case
  }
</script>

<!-- Page Footer-->
{#if metadata.allow_footer}
  <footer class="main-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; 2019. All rights reserved. @xmonader</p>
        </div>
        <div class="col-md-6 text-right">
          <p>
            Template By
            <a
              href="https://bootstrapious.com/p/bootstrap-carousel"
              class="text-white">
              bootstrap carousel
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
{/if}
