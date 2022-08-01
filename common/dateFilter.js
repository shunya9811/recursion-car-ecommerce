Vue.filter("date_format", function(val){
    return val.slice(0,4) + "-" + val.slice(4, 6) + "-" + val.slice(-2);
});