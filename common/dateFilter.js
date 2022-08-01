Vue.filter("date_format", function(val){
    return String(val).slice(0,4) + "-" + String(val).slice(4, 6) + "-" + String(val).slice(-2);
});