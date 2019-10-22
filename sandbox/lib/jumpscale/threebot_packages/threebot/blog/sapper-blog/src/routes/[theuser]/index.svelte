<script context="module">
  export function preload({ params }) {
    let theuser = params.theuser;
    return this.redirect(302, `${theuser}/posts`);
  }
</script>
