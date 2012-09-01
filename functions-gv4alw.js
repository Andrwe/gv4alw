
function rcube_init_plugin_tab()
{
  if (window.rcmail && rcmail.env.task)
    tab = 'a.button-' + rcmail.env.task;
  if (window.rcmail && rcmail.env.task == 'settings' && rcmail.env.action)
    tab = '#settingstab' + rcmail.env.action.replace(/\./g, '') + ' > a';
    if (rcmail.env.action == 'folders' || rcmail.env.action == 'identities' || rcmail.env.action == 'add-identity' || rcmail.env.action == 'edit-identity')
      tab = 'a.button-' + rcmail.env.action;
  if (window.rcmail && rcmail.env.task == 'dummy' && (rcmail.env.action == 'plugin.sticky_notes' || rcmail.env.action == 'plugin.calendar'))
    tab = 'a.button-' + rcmail.env.action.replace(/.*\./g, '');

  $(tab).addClass('tablink-selected');
  $(tab).removeAttr('onclick').unbind('click').bind('click', function(){return false;}).attr('onclick', '');
}

function rcube_init_action_tab()
{
  $('span.tablink > a').removeClass('tablink-selected').attr('onmousemove', 'rcube_init_action_tab()');
  $('span.tablink-selected > a').addClass('tablink-selected');
}
