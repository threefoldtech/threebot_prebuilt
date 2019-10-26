pushd newproject
    export dev=1
    npm install
    npm run build
popd
cp newproject/dist/* html/ -R
