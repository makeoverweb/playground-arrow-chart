#!/bin/bash

mydir="${0%/*}"
echo $mydir

arr1=$(printenv)
arr2=$(cat .env)

data="$arr2 $arr1"


for line in $data
do
  IFS="=" read -r array <<EOF
$line
EOF
  arr1=${array%=*}
  arr2=${array#*=}

  arr3=$(echo $arr2 | sed -e "s/\\//\\\\\//g")
  str='s/'e.env.${arr1}'/'\"${arr3}\"'/g'
  echo sed -i -- $str "${mydir}/static/js/*.js"
  sed -i -- $str ${mydir}/static/js/*.js
done


# После подстановки данных запускаем nginX 
nginx -g "daemon off;"
