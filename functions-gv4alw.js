
function rcube_init_plugin_tab()
{
  if (window.rcmail && rcmail.env.action)
    tab = '#settingstab' + rcmail.env.action.replace(/\./g, '') + ' > a';
  if (window.rcmail && (rcmail.env.task == 'help'))
    tab = 'a.button-' + rcmail.env.task;
  if (window.rcmail && (rcmail.env.action == 'plugin.sticky_notes' || rcmail.env.action == 'plugin.calendar'))
    tab = 'a.button-' + rcmail.env.action.replace(/.*\./g, '');

  $(tab).addClass('tablink-selected');
  $(tab + '> a').removeAttr('onclick').unbind('click').bind('click', function(){return false;});
}

