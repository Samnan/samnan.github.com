---
layout: page
title: "Projects"
date: 2012-05-24 19:10
comments: false
sharing: true
footer: true
---

<div id="github-projects">
  <div class="full">
    <h1 class="repo-title"><a href="https://github.com/samnan/MyWebSQL">MyWebSQL</a></h1>
    <div class="repo-content full-content">Next generation database web client</div>
    <div class="clear"></div>
  </div>
  <div class="rule"><hr></div>
</div>

<script type="text/javascript" charset="utf-8">
$(function() {
  $('#github-projects').html('');
  $.githubUser(['samnan', 'load_projects'], function(data) {
    var repos = data.user.repositories;
    repos.sort(function(a,b) {
      return b.watchers - a.watchers;
    });

    $(repos).each(function() {
      $('#github-projects').append("\
<div class='full'>\
  <p class='repostats-link'>\
    <a class='watchers' href='"+ this.url +"'>"+this.watchers+" watchers</a>\
    <a class='forks' href='"+ this.url +"'>"+this.forks+" forks</a>\
  </p>\
  <h1 class='repo-title'><a href='" + this.url + "'>" + this.name + "</a></h1>\
  <div class='repo-content full-content'>"+this.description+"</div>\
  <div class='clear'></div>\
</div>\
<div class='rule'><hr/></div>");
    });
  });
});
function load_projects() {
	return false;
}
</script>

