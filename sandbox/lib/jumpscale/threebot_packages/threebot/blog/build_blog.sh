pushd blog
    npm run build
popd
cp blog/public/* html/ -R

