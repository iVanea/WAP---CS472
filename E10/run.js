/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $("#loader").hide();
    $("#btnSearchId").click(search);
    $("#btnDisplayPost").click(requestPosts);
    $("#btnDisplayComent").click(requestComments);
    $("input[type=text]").change(checkFilled);
    const path = "http://jsonplaceholder.typicode.com/";

    function checkFilled() {
        if (!$("input[type=text]")[0].value) {
            $("input[type=text]").css({"background-color": "yellow"});
        } else {
            $("input[type=text]").css({"background-color": "white"});
        }
    }

    function search(event) {
        emptyResults();

        if (!$("input[type=text]")[0].value) {
            alert("Please fill up the data for searching");
            checkFilled();
            return false;
        }

        let searchUrl = path + "users/" + $("input[type=text]")[0].value;
        showLoader();

        $.ajax({
            url: searchUrl,
            type: "GET"
        }).always(stopLoader)
                .done(showData)
                .fail(showFailMessage);

    }
    var showFailMessage = function (data) {
        alert("Error: 404 Data not found! \n Please try another ID.");
    };
    var stopLoader = function () {
        $("#loader").hide();
    };
    var showLoader = function () {
        $("#loader").show();
    };

    var showData = function (data) {
        var str = "";
        str = '<div class="added">' +
                '<span class="info">User Id is </span>' + data.id + '<br/>' +
                '<span class="info">Name is </span> ' + data.name + '<br/>' +
                '<span class="info">Email is </span> ' + data.email + '<br/>' +
                '<span class="info">Address is </span> ' + data.address.suite + ', ' + data.address.street + ' <span class="info"> street, </span> ' +
                data.address.city + ',<span class="info"> zip: </span>' + data.address.zipcode + '<br/>' +
                '<span class="info">Phone: </span> ' + data.phone + '<br/>' +
                '<span class="info">Website: </span> ' + data.website + '<br/>' +
                '<span class="info">Company: </span> ' + data.company.name + '<br/>' +
                '</div>';

        addResult(str);
    };

    function showPostsData(data) {
//        var json_obj = $.parseJSON(data);
//        alert(json_obj[0].userId);
//        var output="<ul>";
//            for (var i in json_obj) 
//            {
//                output+="<li>" + json_obj[i].Language + ",  " + json_obj[i].ID + "</li>";
//            }
//            output+="</ul>";
        if (!data[0]) {
            alert("Very bad, this id we don't have data. Try for another id.");
            return 0;
        }
        let output = '<p><span class="info">User with id:</span>' + data[0].userId + ' </p><dl>';
        for (let i = 0; i < data.length; i++)
        {
            output += '<dt><span class="info">Post number: </span>' + data[i].id + ',<span class="info"> Title:</span>' + data[i].title + '</dt>';
            output += '<dd> <span class="info">Message:</span>' + data[i].body + '</dd>';
        }
        output += "</dl>";
        addResult(output);

    }

    function showCommentData(data) {
        if (!data[0]) {
            alert("Very bad, this id we don't have data. Try for another id!");
            return 0;
        }
        let output = '<p><span class="info">Post with id:</span>' + data[0].postId + ' </p>';
        for (let i = 0; i < data.length; i++)
        {
            output += '<span class="info first">Comment number: </span>' + data[i].id;
            output += '<span class="info">Name is </span> ' + data[i].name + '<br/>' +
                    '<span class="info">Email is </span> ' + data[i].email + '<br/>';
            output += '<span class="info">Message:</span>' + data[i].body + '<br/>';
        }
        output += "<br/>";
        addResult(output);
    }


    function emptyResults() {
        $("#displayContent").empty();
    }
    function addResult(str = "") {
        $("#displayContent").append(str);
    }
    function requestPosts(event) {
        emptyResults();
        if (!$("input[type=text]")[0].value) {
            alert("Please fill up the data for searching");
            checkFilled();
            return false;
        }

        let searchUrl = path + "posts?userId=" + $("input[type=text]")[0].value;
        showLoader();

        $.ajax({
            url: searchUrl,
            type: "GET"
        }).always(stopLoader)
                .done(showPostsData)
                .fail(showFailMessage);

    }

    function requestComments(event) {
        emptyResults();
        if (!$("input[type=text]")[0].value) {
            alert("Please fill up the data for searching");
            checkFilled();
            return false;
        }

        let searchUrl = path + "comments?postId=" + $("input[type=text]")[0].value;
        showLoader();

        $.ajax({
            url: searchUrl,
            type: "GET"
        }).always(stopLoader)
                .done(showCommentData)
                .fail(showFailMessage);
    }


});

