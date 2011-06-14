
function rcube_init_plugin_tab()
{
  if (window.rcmail && rcmail.env.action)
    tab = '#settingstab' + rcmail.env.action.replace(/\./g, '');
  if (window.rcmail && (rcmail.env.task == 'help'))
    tab = 'a.button-' + rcmail.env.task;

  $(tab).addClass('tablink-selected');
  $(tab + '> a').removeAttr('onclick').unbind('click').bind('click', function(){return false;});
}

