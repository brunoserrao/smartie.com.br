<<<<<<< HEAD
(function () {

var defs = {}; // id -> {dependencies, definition, instance (possibly undefined)}

// Used when there is no 'main' module.
// The name is probably (hopefully) unique so minification removes for releases.
var register_3795 = function (id) {
  var module = dem(id);
  var fragments = id.split('.');
  var target = Function('return this;')();
  for (var i = 0; i < fragments.length - 1; ++i) {
    if (target[fragments[i]] === undefined)
      target[fragments[i]] = {};
    target = target[fragments[i]];
  }
  target[fragments[fragments.length - 1]] = module;
};

var instantiate = function (id) {
  var actual = defs[id];
  var dependencies = actual.deps;
  var definition = actual.defn;
  var len = dependencies.length;
  var instances = new Array(len);
  for (var i = 0; i < len; ++i)
    instances[i] = dem(dependencies[i]);
  var defResult = definition.apply(null, instances);
  if (defResult === undefined)
     throw 'module [' + id + '] returned undefined';
  actual.instance = defResult;
};

var def = function (id, dependencies, definition) {
  if (typeof id !== 'string')
    throw 'module id must be a string';
  else if (dependencies === undefined)
    throw 'no dependencies for ' + id;
  else if (definition === undefined)
    throw 'no definition function for ' + id;
  defs[id] = {
    deps: dependencies,
    defn: definition,
    instance: undefined
  };
};

var dem = function (id) {
  var actual = defs[id];
  if (actual === undefined)
    throw 'module [' + id + '] was undefined';
  else if (actual.instance === undefined)
    instantiate(id);
  return actual.instance;
};

var req = function (ids, callback) {
  var len = ids.length;
  var instances = new Array(len);
  for (var i = 0; i < len; ++i)
    instances.push(dem(ids[i]));
  callback.apply(null, callback);
};

var ephox = {};

ephox.bolt = {
  module: {
    api: {
      define: def,
      require: req,
      demand: dem
    }
  }
};

var define = def;
var require = req;
var demand = dem;
// this helps with minificiation when using a lot of global references
var defineGlobal = function (id, ref) {
  define(id, [], function () { return ref; });
};
/*jsc
<<<<<<< HEAD
["tinymce.themes.modern.Theme","global!window","tinymce.core.AddOnManager","tinymce.core.EditorManager","tinymce.core.Env","tinymce.core.ui.Api","tinymce.themes.modern.modes.Iframe","tinymce.themes.modern.modes.Inline","tinymce.themes.modern.ui.ProgressState","tinymce.themes.modern.ui.Resize","global!tinymce.util.Tools.resolve","tinymce.core.dom.DOMUtils","tinymce.core.ui.Factory","tinymce.core.util.Tools","tinymce.themes.modern.ui.A11y","tinymce.themes.modern.ui.Branding","tinymce.themes.modern.ui.ContextToolbars","tinymce.themes.modern.ui.Menubar","tinymce.themes.modern.ui.Sidebar","tinymce.themes.modern.ui.SkinLoaded","tinymce.themes.modern.ui.Toolbar","tinymce.core.ui.FloatPanel","tinymce.core.ui.Throbber","tinymce.core.util.Delay","tinymce.core.geom.Rect"]
jsc*/
defineGlobal("global!window", window);
defineGlobal("global!tinymce.util.Tools.resolve", tinymce.util.Tools.resolve);
=======
>>>>>>> parent of 6188f9c... WordPress 4.9.1
/**
 * theme.js
 *
 * Released under LGPL License.
<<<<<<< HEAD
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
=======
["tinymce.modern.Theme","global!tinymce.Env","global!tinymce.EditorManager","global!tinymce.ThemeManager","tinymce.modern.modes.Iframe","tinymce.modern.modes.Inline","tinymce.modern.ui.Resize","tinymce.modern.ui.ProgressState","global!tinymce.util.Tools","global!tinymce.ui.Factory","global!tinymce.DOM","tinymce.modern.ui.Toolbar","tinymce.modern.ui.Menubar","tinymce.modern.ui.ContextToolbars","tinymce.modern.ui.A11y","tinymce.modern.ui.Sidebar","tinymce.modern.ui.SkinLoaded","global!tinymce.ui.FloatPanel","global!tinymce.ui.Throbber","global!tinymce.util.Delay","global!tinymce.geom.Rect"]
jsc*/
defineGlobal("global!tinymce.Env", tinymce.Env);
defineGlobal("global!tinymce.EditorManager", tinymce.EditorManager);
defineGlobal("global!tinymce.ThemeManager", tinymce.ThemeManager);
defineGlobal("global!tinymce.util.Tools", tinymce.util.Tools);
defineGlobal("global!tinymce.ui.Factory", tinymce.ui.Factory);
defineGlobal("global!tinymce.DOM", tinymce.DOM);
/**
 * Toolbar.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
>>>>>>> origin/master
=======
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
>>>>>>> parent of 6188f9c... WordPress 4.9.1
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
<<<<<<< HEAD
define(
  'tinymce.core.AddOnManager',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.AddOnManager');
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.EditorManager',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.EditorManager');
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.Env',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.Env');
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.ui.Api',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.ui.Api');
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.dom.DOMUtils',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.dom.DOMUtils');
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.ui.Factory',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.ui.Factory');
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.util.Tools',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.util.Tools');
  }
);

/**
 * A11y.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.themes.modern.ui.A11y',
  [
  ],
  function () {
    var focus = function (panel, type) {
      return function () {
        var item = panel.find(type)[0];

        if (item) {
          item.focus(true);
        }
      };
    };

    var addKeys = function (editor, panel) {
      editor.shortcuts.add('Alt+F9', '', focus(panel, 'menubar'));
      editor.shortcuts.add('Alt+F10,F10', '', focus(panel, 'toolbar'));
      editor.shortcuts.add('Alt+F11', '', focus(panel, 'elementpath'));
      panel.on('cancel', function () {
        editor.focus();
      });
    };

    return {
      addKeys: addKeys
    };
  }
);

/**
 * Branding.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.themes.modern.ui.Branding',
  [
    'tinymce.core.dom.DOMUtils'
  ],
  function (DOMUtils) {
    var DOM = DOMUtils.DOM;

    var reposition = function (editor, poweredByElm, hasStatusbar) {
      return function () {
        var iframeWidth = editor.getContentAreaContainer().querySelector('iframe').offsetWidth;
        var scrollbarWidth = Math.max(iframeWidth - editor.getDoc().documentElement.offsetWidth, 0);

        DOM.setStyle(poweredByElm, 'right', scrollbarWidth + 'px');
        if (hasStatusbar) {
          DOM.setStyle(poweredByElm, 'top', '-16px');
        } else {
          DOM.setStyle(poweredByElm, 'bottom', '1px');
        }
      };
    };

    var hide = function (poweredByElm) {
      return function () {
        DOM.hide(poweredByElm);
      };
    };

    var setupReposition = function (editor, poweredByElm, hasStatusbar) {
      reposition(editor, poweredByElm, hasStatusbar)();
      editor.on('NodeChange ResizeEditor', reposition(editor, poweredByElm, hasStatusbar));
    };

    var appendToStatusbar = function (editor, poweredByElm, statusbarElm) {
      statusbarElm.appendChild(poweredByElm);
      setupReposition(editor, poweredByElm, true);
    };

    var appendToContainer = function (editor, poweredByElm) {
      editor.getContainer().appendChild(poweredByElm);
      setupReposition(editor, poweredByElm, false);
    };

    var setupEventListeners = function (editor) {
      editor.on('SkinLoaded', function () {
        var poweredByElm = DOM.create('div', { 'class': 'mce-branding-powered-by' });
        var statusbarElm = editor.getContainer().querySelector('.mce-statusbar');

        if (statusbarElm) {
          appendToStatusbar(editor, poweredByElm, statusbarElm);
        } else {
          appendToContainer(editor, poweredByElm);
        }

        DOM.bind(poweredByElm, 'click', hide(poweredByElm));
      });
    };

    var setup = function (editor) {
      if (editor.settings.branding !== false) {
        setupEventListeners(editor);
      }
    };

    return {
      setup: setup
    };
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.util.Delay',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.util.Delay');
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.geom.Rect',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.geom.Rect');
  }
);

/**
 * Toolbar.js
=======
define('tinymce.modern.ui.Toolbar', [
	'global!tinymce.util.Tools',
	'global!tinymce.ui.Factory'
], function (Tools, Factory) {
	var defaultToolbar = "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
		"bullist numlist outdent indent | link image";

	var createToolbar = function (editor, items, size) {
=======
/*global tinymce:true */

tinymce.ThemeManager.add('modern', function(editor) {
	var self = this, settings = editor.settings, Factory = tinymce.ui.Factory,
		each = tinymce.each, DOM = tinymce.DOM, Rect = tinymce.geom.Rect, FloatPanel = tinymce.ui.FloatPanel;

	// Default menus
	var defaultMenus = {
		file: {title: 'File', items: 'newdocument'},
		edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
		insert: {title: 'Insert', items: '|'},
		view: {title: 'View', items: 'visualaid |'},
		format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
		table: {title: 'Table'},
		tools: {title: 'Tools'}
	};

	var defaultToolbar = "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
		"bullist numlist outdent indent | link image";

	function createToolbar(items, size) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
		var toolbarItems = [], buttonGroup;

		if (!items) {
			return;
		}

<<<<<<< HEAD
		Tools.each(items.split(/[ ,]/), function(item) {
			var itemName;

			var bindSelectorChanged = function () {
				var selection = editor.selection;

=======
		each(items.split(/[ ,]/), function(item) {
			var itemName;

			function bindSelectorChanged() {
				var selection = editor.selection;

				function setActiveItem(name) {
					return function(state, args) {
						var nodeName, i = args.parents.length;

						while (i--) {
							nodeName = args.parents[i].nodeName;
							if (nodeName == "OL" || nodeName == "UL") {
								break;
							}
						}

						item.active(state && nodeName == name);
					};
				}

				if (itemName == "bullist") {
					selection.selectorChanged('ul > li', setActiveItem("UL"));
				}

				if (itemName == "numlist") {
					selection.selectorChanged('ol > li', setActiveItem("OL"));
				}

>>>>>>> parent of 6188f9c... WordPress 4.9.1
				if (item.settings.stateSelector) {
					selection.selectorChanged(item.settings.stateSelector, function(state) {
						item.active(state);
					}, true);
				}

				if (item.settings.disabledStateSelector) {
					selection.selectorChanged(item.settings.disabledStateSelector, function(state) {
						item.disabled(state);
					});
				}
<<<<<<< HEAD
			};
=======
			}
>>>>>>> parent of 6188f9c... WordPress 4.9.1

			if (item == "|") {
				buttonGroup = null;
			} else {
				if (Factory.has(item)) {
					item = {type: item, size: size};
					toolbarItems.push(item);
					buttonGroup = null;
				} else {
					if (!buttonGroup) {
						buttonGroup = {type: 'buttongroup', items: []};
						toolbarItems.push(buttonGroup);
					}

					if (editor.buttons[item]) {
						// TODO: Move control creation to some UI class
						itemName = item;
						item = editor.buttons[itemName];

						if (typeof item == "function") {
							item = item();
						}

						item.type = item.type || 'button';
						item.size = size;

						item = Factory.create(item);
						buttonGroup.items.push(item);

						if (editor.initialized) {
							bindSelectorChanged();
						} else {
							editor.on('init', bindSelectorChanged);
						}
					}
				}
			}
		});

		return {
			type: 'toolbar',
			layout: 'flow',
			items: toolbarItems
		};
<<<<<<< HEAD
	};
=======
	}
>>>>>>> parent of 6188f9c... WordPress 4.9.1

	/**
	 * Creates the toolbars from config and returns a toolbar array.
	 *
	 * @param {String} size Optional toolbar item size.
	 * @return {Array} Array with toolbars.
	 */
<<<<<<< HEAD
	var createToolbars = function (editor, size) {
		var toolbars = [], settings = editor.settings;

		var addToolbar = function (items) {
			if (items) {
				toolbars.push(createToolbar(editor, items, size));
				return true;
			}
		};

		// Convert toolbar array to multiple options
		if (Tools.isArray(settings.toolbar)) {
=======
	function createToolbars(size) {
		var toolbars = [];

		function addToolbar(items) {
			if (items) {
				toolbars.push(createToolbar(items, size));
				return true;
			}
		}

		// Convert toolbar array to multiple options
		if (tinymce.isArray(settings.toolbar)) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			// Empty toolbar array is the same as a disabled toolbar
			if (settings.toolbar.length === 0) {
				return;
			}

<<<<<<< HEAD
			Tools.each(settings.toolbar, function(toolbar, i) {
=======
			tinymce.each(settings.toolbar, function(toolbar, i) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				settings["toolbar" + (i + 1)] = toolbar;
			});

			delete settings.toolbar;
		}

		// Generate toolbar<n>
		for (var i = 1; i < 10; i++) {
			if (!addToolbar(settings["toolbar" + i])) {
				break;
			}
		}

		// Generate toolbar or default toolbar unless it's disabled
		if (!toolbars.length && settings.toolbar !== false) {
			addToolbar(settings.toolbar || defaultToolbar);
		}

		if (toolbars.length) {
			return {
				type: 'panel',
				layout: 'stack',
				classes: "toolbar-grp",
				ariaRoot: true,
				ariaRemember: true,
				items: toolbars
			};
		}
<<<<<<< HEAD
	};

	return {
		createToolbar: createToolbar,
		createToolbars: createToolbars
	};
});

/**
 * Menubar.js
>>>>>>> origin/master
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.ui.Toolbar',
  [
    'tinymce.core.util.Tools',
    'tinymce.core.ui.Factory'
  ],
  function (Tools, Factory) {
    var defaultToolbar = "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
      "bullist numlist outdent indent | link image";

    var createToolbar = function (editor, items, size) {
      var toolbarItems = [], buttonGroup;

      if (!items) {
        return;
      }

      Tools.each(items.split(/[ ,]/), function (item) {
        var itemName;

        var bindSelectorChanged = function () {
          var selection = editor.selection;

          if (item.settings.stateSelector) {
            selection.selectorChanged(item.settings.stateSelector, function (state) {
              item.active(state);
            }, true);
          }

          if (item.settings.disabledStateSelector) {
            selection.selectorChanged(item.settings.disabledStateSelector, function (state) {
              item.disabled(state);
            });
          }
        };

        if (item == "|") {
          buttonGroup = null;
        } else {
          if (!buttonGroup) {
            buttonGroup = { type: 'buttongroup', items: [] };
            toolbarItems.push(buttonGroup);
          }

          if (editor.buttons[item]) {
            // TODO: Move control creation to some UI class
            itemName = item;
            item = editor.buttons[itemName];

            if (typeof item == "function") {
              item = item();
            }

            item.type = item.type || 'button';
            item.size = size;

            item = Factory.create(item);
            buttonGroup.items.push(item);

            if (editor.initialized) {
              bindSelectorChanged();
            } else {
              editor.on('init', bindSelectorChanged);
            }
          }
        }
      });

      return {
        type: 'toolbar',
        layout: 'flow',
        items: toolbarItems
      };
    };

    /**
     * Creates the toolbars from config and returns a toolbar array.
     *
     * @param {String} size Optional toolbar item size.
     * @return {Array} Array with toolbars.
     */
    var createToolbars = function (editor, size) {
      var toolbars = [], settings = editor.settings;

      var addToolbar = function (items) {
        if (items) {
          toolbars.push(createToolbar(editor, items, size));
          return true;
        }
      };

      // Convert toolbar array to multiple options
      if (Tools.isArray(settings.toolbar)) {
        // Empty toolbar array is the same as a disabled toolbar
        if (settings.toolbar.length === 0) {
          return;
        }

        Tools.each(settings.toolbar, function (toolbar, i) {
          settings["toolbar" + (i + 1)] = toolbar;
        });

        delete settings.toolbar;
      }

      // Generate toolbar<n>
      for (var i = 1; i < 10; i++) {
        if (!addToolbar(settings["toolbar" + i])) {
          break;
        }
      }

      // Generate toolbar or default toolbar unless it's disabled
      if (!toolbars.length && settings.toolbar !== false) {
        addToolbar(settings.toolbar || defaultToolbar);
      }

      if (toolbars.length) {
        return {
          type: 'panel',
          layout: 'stack',
          classes: "toolbar-grp",
          ariaRoot: true,
          ariaRemember: true,
          items: toolbars
        };
      }
    };

    return {
      createToolbar: createToolbar,
      createToolbars: createToolbars
    };
  }
);

=======
define('tinymce.modern.ui.Menubar', [
	'global!tinymce.util.Tools'
], function (Tools) {
	var defaultMenus = {
		file: {title: 'File', items: 'newdocument'},
		edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
		insert: {title: 'Insert', items: '|'},
		view: {title: 'View', items: 'visualaid |'},
		format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
		table: {title: 'Table'},
		tools: {title: 'Tools'}
	};

	var createMenuItem = function (menuItems, name) {
		var menuItem;

		if (name == '|') {
			return {text: '|'};
		}

		menuItem = menuItems[name];

		return menuItem;
	};

	var createMenu = function (editorMenuItems, settings, context) {
		var menuButton, menu, menuItems, isUserDefined, removedMenuItems;

		removedMenuItems = Tools.makeMap((settings.removed_menuitems || '').split(/[ ,]/));

		// User defined menu
		if (settings.menu) {
			menu = settings.menu[context];
			isUserDefined = true;
		} else {
			menu = defaultMenus[context];
		}

		if (menu) {
			menuButton = {text: menu.title};
			menuItems = [];

			// Default/user defined items
			Tools.each((menu.items || '').split(/[ ,]/), function(item) {
				var menuItem = createMenuItem(editorMenuItems, item);

				if (menuItem && !removedMenuItems[item]) {
					menuItems.push(createMenuItem(editorMenuItems, item));
				}
			});

			// Added though context
			if (!isUserDefined) {
				Tools.each(editorMenuItems, function(menuItem) {
					if (menuItem.context == context) {
						if (menuItem.separator == 'before') {
							menuItems.push({text: '|'});
						}

						if (menuItem.prependToContext) {
							menuItems.unshift(menuItem);
						} else {
							menuItems.push(menuItem);
						}

						if (menuItem.separator == 'after') {
							menuItems.push({text: '|'});
						}
					}
				});
			}

			for (var i = 0; i < menuItems.length; i++) {
				if (menuItems[i].text == '|') {
					if (i === 0 || i == menuItems.length - 1) {
						menuItems.splice(i, 1);
					}
				}
			}

			menuButton.menu = menuItems;

			if (!menuButton.menu.length) {
				return null;
			}
		}

		return menuButton;
	};

	var createMenuButtons = function (editor) {
		var name, menuButtons = [], settings = editor.settings;
=======
	}

	/**
	 * Creates the menu buttons based on config.
	 *
	 * @return {Array} Menu buttons array.
	 */
	function createMenuButtons() {
		var name, menuButtons = [];

		function createMenuItem(name) {
			var menuItem;

			if (name == '|') {
				return {text: '|'};
			}

			menuItem = editor.menuItems[name];

			return menuItem;
		}

		function createMenu(context) {
			var menuButton, menu, menuItems, isUserDefined, removedMenuItems;

			removedMenuItems = tinymce.makeMap((settings.removed_menuitems || '').split(/[ ,]/));

			// User defined menu
			if (settings.menu) {
				menu = settings.menu[context];
				isUserDefined = true;
			} else {
				menu = defaultMenus[context];
			}

			if (menu) {
				menuButton = {text: menu.title};
				menuItems = [];

				// Default/user defined items
				each((menu.items || '').split(/[ ,]/), function(item) {
					var menuItem = createMenuItem(item);

					if (menuItem && !removedMenuItems[item]) {
						menuItems.push(createMenuItem(item));
					}
				});

				// Added though context
				if (!isUserDefined) {
					each(editor.menuItems, function(menuItem) {
						if (menuItem.context == context) {
							if (menuItem.separator == 'before') {
								menuItems.push({text: '|'});
							}

							if (menuItem.prependToContext) {
								menuItems.unshift(menuItem);
							} else {
								menuItems.push(menuItem);
							}

							if (menuItem.separator == 'after') {
								menuItems.push({text: '|'});
							}
						}
					});
				}

				for (var i = 0; i < menuItems.length; i++) {
					if (menuItems[i].text == '|') {
						if (i === 0 || i == menuItems.length - 1) {
							menuItems.splice(i, 1);
						}
					}
				}

				menuButton.menu = menuItems;

				if (!menuButton.menu.length) {
					return null;
				}
			}

			return menuButton;
		}
>>>>>>> parent of 6188f9c... WordPress 4.9.1

		var defaultMenuBar = [];
		if (settings.menu) {
			for (name in settings.menu) {
				defaultMenuBar.push(name);
			}
		} else {
			for (name in defaultMenus) {
				defaultMenuBar.push(name);
			}
		}

		var enabledMenuNames = typeof settings.menubar == "string" ? settings.menubar.split(/[ ,]/) : defaultMenuBar;
		for (var i = 0; i < enabledMenuNames.length; i++) {
			var menu = enabledMenuNames[i];
<<<<<<< HEAD
			menu = createMenu(editor.menuItems, editor.settings, menu);
=======
			menu = createMenu(menu);
>>>>>>> parent of 6188f9c... WordPress 4.9.1

			if (menu) {
				menuButtons.push(menu);
			}
		}

		return menuButtons;
<<<<<<< HEAD
	};

	return {
		createMenuButtons: createMenuButtons
	};
});

defineGlobal("global!tinymce.util.Delay", tinymce.util.Delay);
defineGlobal("global!tinymce.geom.Rect", tinymce.geom.Rect);
>>>>>>> origin/master
/**
 * ContextToolbars.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.ui.ContextToolbars',
  [
    'tinymce.core.dom.DOMUtils',
    'tinymce.core.util.Tools',
    'tinymce.core.util.Delay',
    'tinymce.core.ui.Factory',
    'tinymce.core.geom.Rect',
    'tinymce.themes.modern.ui.Toolbar'
  ],
  function (DOMUtils, Tools, Delay, Factory, Rect, Toolbar) {
    var DOM = DOMUtils.DOM;

    var toClientRect = function (geomRect) {
      return {
        left: geomRect.x,
        top: geomRect.y,
        width: geomRect.w,
        height: geomRect.h,
        right: geomRect.x + geomRect.w,
        bottom: geomRect.y + geomRect.h
      };
    };

    var hideAllFloatingPanels = function (editor) {
      Tools.each(editor.contextToolbars, function (toolbar) {
        if (toolbar.panel) {
          toolbar.panel.hide();
        }
      });
    };

    var movePanelTo = function (panel, pos) {
      panel.moveTo(pos.left, pos.top);
    };

    var togglePositionClass = function (panel, relPos, predicate) {
      relPos = relPos ? relPos.substr(0, 2) : '';

      Tools.each({
        t: 'down',
        b: 'up'
      }, function (cls, pos) {
        panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(0, 1)));
      });

      Tools.each({
        l: 'left',
        r: 'right'
      }, function (cls, pos) {
        panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(1, 1)));
      });
    };

    var userConstrain = function (handler, x, y, elementRect, contentAreaRect, panelRect) {
      panelRect = toClientRect({ x: x, y: y, w: panelRect.w, h: panelRect.h });

      if (handler) {
        panelRect = handler({
          elementRect: toClientRect(elementRect),
          contentAreaRect: toClientRect(contentAreaRect),
          panelRect: panelRect
        });
      }

      return panelRect;
    };

    var addContextualToolbars = function (editor) {
      var scrollContainer, settings = editor.settings;

      var getContextToolbars = function () {
        return editor.contextToolbars || [];
      };

      var getElementRect = function (elm) {
        var pos, targetRect, root;

        pos = DOM.getPos(editor.getContentAreaContainer());
        targetRect = editor.dom.getRect(elm);
        root = editor.dom.getRoot();

        // Adjust targetPos for scrolling in the editor
        if (root.nodeName === 'BODY') {
          targetRect.x -= root.ownerDocument.documentElement.scrollLeft || root.scrollLeft;
          targetRect.y -= root.ownerDocument.documentElement.scrollTop || root.scrollTop;
        }

        targetRect.x += pos.x;
        targetRect.y += pos.y;

        return targetRect;
      };

      var reposition = function (match, shouldShow) {
        var relPos, panelRect, elementRect, contentAreaRect, panel, relRect, testPositions, smallElementWidthThreshold;
        var handler = settings.inline_toolbar_position_handler;

        if (editor.removed) {
          return;
        }

        if (!match || !match.toolbar.panel) {
          hideAllFloatingPanels(editor);
          return;
        }

        testPositions = [
          'bc-tc', 'tc-bc',
          'tl-bl', 'bl-tl',
          'tr-br', 'br-tr'
        ];

        panel = match.toolbar.panel;

        // Only show the panel on some events not for example nodeChange since that fires when context menu is opened
        if (shouldShow) {
          panel.show();
        }

        elementRect = getElementRect(match.element);
        panelRect = DOM.getRect(panel.getEl());
        contentAreaRect = DOM.getRect(editor.getContentAreaContainer() || editor.getBody());
        smallElementWidthThreshold = 25;

        if (DOM.getStyle(match.element, 'display', true) !== 'inline') {
          // We need to use these instead of the rect values since the style
          // size properites might not be the same as the real size for a table
          elementRect.w = match.element.clientWidth;
          elementRect.h = match.element.clientHeight;
        }

        if (!editor.inline) {
          contentAreaRect.w = editor.getDoc().documentElement.offsetWidth;
        }

        // Inflate the elementRect so it doesn't get placed above resize handles
        if (editor.selection.controlSelection.isResizable(match.element) && elementRect.w < smallElementWidthThreshold) {
          elementRect = Rect.inflate(elementRect, 0, 8);
        }

        relPos = Rect.findBestRelativePosition(panelRect, elementRect, contentAreaRect, testPositions);
        elementRect = Rect.clamp(elementRect, contentAreaRect);

        if (relPos) {
          relRect = Rect.relativePosition(panelRect, elementRect, relPos);
          movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
        } else {
          // Allow overflow below the editor to avoid placing toolbars ontop of tables
          contentAreaRect.h += panelRect.h;

          elementRect = Rect.intersect(contentAreaRect, elementRect);
          if (elementRect) {
            relPos = Rect.findBestRelativePosition(panelRect, elementRect, contentAreaRect, [
              'bc-tc', 'bl-tl', 'br-tr'
            ]);

            if (relPos) {
              relRect = Rect.relativePosition(panelRect, elementRect, relPos);
              movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
            } else {
              movePanelTo(panel, userConstrain(handler, elementRect.x, elementRect.y, elementRect, contentAreaRect, panelRect));
            }
          } else {
            panel.hide();
          }
        }

        togglePositionClass(panel, relPos, function (pos1, pos2) {
          return pos1 === pos2;
        });

        //drawRect(contentAreaRect, 'blue');
        //drawRect(elementRect, 'red');
        //drawRect(panelRect, 'green');
      };

      var repositionHandler = function (show) {
        return function () {
          var execute = function () {
            if (editor.selection) {
              reposition(findFrontMostMatch(editor.selection.getNode()), show);
            }
          };

          Delay.requestAnimationFrame(execute);
        };
      };

      var bindScrollEvent = function () {
        if (!scrollContainer) {
          scrollContainer = editor.selection.getScrollContainer() || editor.getWin();
          DOM.bind(scrollContainer, 'scroll', repositionHandler(true));

          editor.on('remove', function () {
            DOM.unbind(scrollContainer, 'scroll');
          });
        }
      };

      var showContextToolbar = function (match) {
        var panel;

        if (match.toolbar.panel) {
          match.toolbar.panel.show();
          reposition(match);
          return;
        }

        bindScrollEvent();

        panel = Factory.create({
          type: 'floatpanel',
          role: 'dialog',
          classes: 'tinymce tinymce-inline arrow',
          ariaLabel: 'Inline toolbar',
          layout: 'flex',
          direction: 'column',
          align: 'stretch',
          autohide: false,
          autofix: true,
          fixed: true,
          border: 1,
          items: Toolbar.createToolbar(editor, match.toolbar.items),
          oncancel: function () {
            editor.focus();
          }
        });

        match.toolbar.panel = panel;
        panel.renderTo(document.body).reflow();
        reposition(match);
      };

      var hideAllContextToolbars = function () {
        Tools.each(getContextToolbars(), function (toolbar) {
          if (toolbar.panel) {
            toolbar.panel.hide();
          }
        });
      };

      var findFrontMostMatch = function (targetElm) {
        var i, y, parentsAndSelf, toolbars = getContextToolbars();

        parentsAndSelf = editor.$(targetElm).parents().add(targetElm);
        for (i = parentsAndSelf.length - 1; i >= 0; i--) {
          for (y = toolbars.length - 1; y >= 0; y--) {
            if (toolbars[y].predicate(parentsAndSelf[i])) {
              return {
                toolbar: toolbars[y],
                element: parentsAndSelf[i]
              };
            }
          }
        }

        return null;
      };

      editor.on('click keyup setContent ObjectResized', function (e) {
        // Only act on partial inserts
        if (e.type === 'setcontent' && !e.selection) {
          return;
        }

        // Needs to be delayed to avoid Chrome img focus out bug
        Delay.setEditorTimeout(editor, function () {
          var match;

          match = findFrontMostMatch(editor.selection.getNode());
          if (match) {
            hideAllContextToolbars();
            showContextToolbar(match);
          } else {
            hideAllContextToolbars();
          }
        });
      });

      editor.on('blur hide contextmenu', hideAllContextToolbars);

      editor.on('ObjectResizeStart', function () {
        var match = findFrontMostMatch(editor.selection.getNode());

        if (match && match.toolbar.panel) {
          match.toolbar.panel.hide();
        }
      });

      editor.on('ResizeEditor ResizeWindow', repositionHandler(true));
      editor.on('nodeChange', repositionHandler(false));

      editor.on('remove', function () {
        Tools.each(getContextToolbars(), function (toolbar) {
          if (toolbar.panel) {
            toolbar.panel.remove();
          }
        });

        editor.contextToolbars = {};
      });

      editor.shortcuts.add('ctrl+shift+e > ctrl+shift+p', '', function () {
        var match = findFrontMostMatch(editor.selection.getNode());
        if (match && match.toolbar.panel) {
          match.toolbar.panel.items()[0].focus();
        }
      });
    };

    return {
      addContextualToolbars: addContextualToolbars
    };
  }
);

/**
 * Menubar.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.themes.modern.ui.Menubar',
  [
    'tinymce.core.util.Tools'
  ],
  function (Tools) {
    var defaultMenus = {
      file: { title: 'File', items: 'newdocument' },
      edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall' },
      insert: { title: 'Insert', items: '|' },
      view: { title: 'View', items: 'visualaid |' },
      format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat' },
      table: { title: 'Table' },
      tools: { title: 'Tools' }
    };

    var createMenuItem = function (menuItems, name) {
      var menuItem;

      if (name == '|') {
        return { text: '|' };
      }

      menuItem = menuItems[name];

      return menuItem;
    };

    var createMenu = function (editorMenuItems, settings, context) {
      var menuButton, menu, menuItems, isUserDefined, removedMenuItems;

      removedMenuItems = Tools.makeMap((settings.removed_menuitems || '').split(/[ ,]/));

      // User defined menu
      if (settings.menu) {
        menu = settings.menu[context];
        isUserDefined = true;
      } else {
        menu = defaultMenus[context];
      }

      if (menu) {
        menuButton = { text: menu.title };
        menuItems = [];

        // Default/user defined items
        Tools.each((menu.items || '').split(/[ ,]/), function (item) {
          var menuItem = createMenuItem(editorMenuItems, item);

          if (menuItem && !removedMenuItems[item]) {
            menuItems.push(createMenuItem(editorMenuItems, item));
          }
        });

        // Added though context
        if (!isUserDefined) {
          Tools.each(editorMenuItems, function (menuItem) {
            if (menuItem.context == context) {
              if (menuItem.separator == 'before') {
                menuItems.push({ text: '|' });
              }

              if (menuItem.prependToContext) {
                menuItems.unshift(menuItem);
              } else {
                menuItems.push(menuItem);
              }

              if (menuItem.separator == 'after') {
                menuItems.push({ text: '|' });
              }
            }
          });
        }

        for (var i = 0; i < menuItems.length; i++) {
          if (menuItems[i].text == '|') {
            if (i === 0 || i == menuItems.length - 1) {
              menuItems.splice(i, 1);
            }
          }
        }

        menuButton.menu = menuItems;

        if (!menuButton.menu.length) {
          return null;
        }
      }

      return menuButton;
    };

    var createMenuButtons = function (editor) {
      var name, menuButtons = [], settings = editor.settings;

      var defaultMenuBar = [];
      if (settings.menu) {
        for (name in settings.menu) {
          defaultMenuBar.push(name);
        }
      } else {
        for (name in defaultMenus) {
          defaultMenuBar.push(name);
        }
      }

      var enabledMenuNames = typeof settings.menubar == "string" ? settings.menubar.split(/[ ,]/) : defaultMenuBar;
      for (var i = 0; i < enabledMenuNames.length; i++) {
        var menu = enabledMenuNames[i];
        menu = createMenu(editor.menuItems, editor.settings, menu);

        if (menu) {
          menuButtons.push(menu);
        }
      }

      return menuButtons;
    };

    return {
      createMenuButtons: createMenuButtons
    };
  }
);

/**
 * Resize.js
=======
define('tinymce.modern.ui.ContextToolbars', [
	'global!tinymce.DOM',
	'global!tinymce.util.Tools',
	'global!tinymce.util.Delay',
	'tinymce.modern.ui.Toolbar',
	'global!tinymce.ui.Factory',
	'global!tinymce.geom.Rect'
], function (DOM, Tools, Delay, Toolbar, Factory, Rect) {
	var toClientRect = function (geomRect) {
		return {
			left: geomRect.x,
			top: geomRect.y,
			width: geomRect.w,
			height: geomRect.h,
			right: geomRect.x + geomRect.w,
			bottom: geomRect.y + geomRect.h
		};
	};

	var hideAllFloatingPanels = function (editor) {
		Tools.each(editor.contextToolbars, function(toolbar) {
			if (toolbar.panel) {
				toolbar.panel.hide();
			}
		});
	};

	var movePanelTo = function (panel, pos) {
		panel.moveTo(pos.left, pos.top);
	};

	var togglePositionClass = function (panel, relPos, predicate) {
		relPos = relPos ? relPos.substr(0, 2) : '';

		Tools.each({
			t: 'down',
			b: 'up'
		}, function(cls, pos) {
			panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(0, 1)));
		});

		Tools.each({
			l: 'left',
			r: 'right'
		}, function(cls, pos) {
			panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(1, 1)));
		});
	};

	var userConstrain = function (handler, x, y, elementRect, contentAreaRect, panelRect) {
		panelRect = toClientRect({x: x, y: y, w: panelRect.w, h: panelRect.h});

		if (handler) {
			panelRect = handler({
				elementRect: toClientRect(elementRect),
				contentAreaRect: toClientRect(contentAreaRect),
				panelRect: panelRect
			});
		}

		return panelRect;
	};

	var addContextualToolbars = function (editor) {
		var scrollContainer, settings = editor.settings;

		var getContextToolbars = function () {
			return editor.contextToolbars || [];
		};

		var getElementRect = function (elm) {
			var pos, targetRect, root;

			pos = DOM.getPos(editor.getContentAreaContainer());
=======
	}

	/**
	 * Adds accessibility shortcut keys to panel.
	 *
	 * @param {tinymce.ui.Panel} panel Panel to add focus to.
	 */
	function addAccessibilityKeys(panel) {
		function focus(type) {
			var item = panel.find(type)[0];

			if (item) {
				item.focus(true);
			}
		}

		editor.shortcuts.add('Alt+F9', '', function() {
			focus('menubar');
		});

		editor.shortcuts.add('Alt+F10', '', function() {
			focus('toolbar');
		});

		editor.shortcuts.add('Alt+F11', '', function() {
			focus('elementpath');
		});

		panel.on('cancel', function() {
			editor.focus();
		});
	}

	/**
	 * Resizes the editor to the specified width, height.
	 */
	function resizeTo(width, height) {
		var containerElm, iframeElm, containerSize, iframeSize;

		function getSize(elm) {
			return {
				width: elm.clientWidth,
				height: elm.clientHeight
			};
		}

		containerElm = editor.getContainer();
		iframeElm = editor.getContentAreaContainer().firstChild;
		containerSize = getSize(containerElm);
		iframeSize = getSize(iframeElm);

		if (width !== null) {
			width = Math.max(settings.min_width || 100, width);
			width = Math.min(settings.max_width || 0xFFFF, width);

			DOM.setStyle(containerElm, 'width', width + (containerSize.width - iframeSize.width));
			DOM.setStyle(iframeElm, 'width', width);
		}

		height = Math.max(settings.min_height || 100, height);
		height = Math.min(settings.max_height || 0xFFFF, height);
		DOM.setStyle(iframeElm, 'height', height);

		editor.fire('ResizeEditor');
	}

	function resizeBy(dw, dh) {
		var elm = editor.getContentAreaContainer();
		self.resizeTo(elm.clientWidth + dw, elm.clientHeight + dh);
	}

	/**
	 * Handles contextual toolbars.
	 */
	function addContextualToolbars() {
		var scrollContainer;

		function getContextToolbars() {
			return editor.contextToolbars || [];
		}

		function getElementRect(elm) {
			var pos, targetRect, root;

			pos = tinymce.DOM.getPos(editor.getContentAreaContainer());
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			targetRect = editor.dom.getRect(elm);
			root = editor.dom.getRoot();

			// Adjust targetPos for scrolling in the editor
<<<<<<< HEAD
			if (root.nodeName === 'BODY') {
=======
			if (root.nodeName == 'BODY') {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				targetRect.x -= root.ownerDocument.documentElement.scrollLeft || root.scrollLeft;
				targetRect.y -= root.ownerDocument.documentElement.scrollTop || root.scrollTop;
			}

			targetRect.x += pos.x;
			targetRect.y += pos.y;

			return targetRect;
<<<<<<< HEAD
		};

		var reposition = function (match, shouldShow) {
			var relPos, panelRect, elementRect, contentAreaRect, panel, relRect, testPositions, smallElementWidthThreshold;
			var handler = settings.inline_toolbar_position_handler;
=======
		}

		function hideAllFloatingPanels() {
			each(editor.contextToolbars, function(toolbar) {
				if (toolbar.panel) {
					toolbar.panel.hide();
				}
			});
		}

		function togglePositionClass(panel, relPos, predicate) {
			relPos = relPos ? relPos.substr(0, 2) : '';

			each({
				t: 'down',
				b: 'up'
			}, function(cls, pos) {
				panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(0, 1)));
			});

			each({
				l: 'left',
				r: 'right'
			}, function(cls, pos) {
				panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(1, 1)));
			});
		}

		function toClientRect(geomRect) {
			return {
				left: geomRect.x,
				top: geomRect.y,
				width: geomRect.w,
				height: geomRect.h,
				right: geomRect.x + geomRect.w,
				bottom: geomRect.y + geomRect.h
			};
		}

		function userConstrain(x, y, elementRect, contentAreaRect, panelRect) {
				panelRect = toClientRect({x: x, y: y, w: panelRect.w, h: panelRect.h});

				if (settings.inline_toolbar_position_handler) {
					panelRect = settings.inline_toolbar_position_handler({
						elementRect: toClientRect(elementRect),
						contentAreaRect: toClientRect(contentAreaRect),
						panelRect: panelRect
					});
				}

				return panelRect;
		}

		function movePanelTo(panel, pos) {
			panel.moveTo(pos.left, pos.top);
		}

		function reposition(match) {
			var relPos, panelRect, elementRect, contentAreaRect, panel, relRect, testPositions, smallElementWidthThreshold;
>>>>>>> parent of 6188f9c... WordPress 4.9.1

			if (editor.removed) {
				return;
			}

			if (!match || !match.toolbar.panel) {
<<<<<<< HEAD
				hideAllFloatingPanels(editor);
=======
				hideAllFloatingPanels();
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				return;
			}

			testPositions = [
				'bc-tc', 'tc-bc',
				'tl-bl', 'bl-tl',
				'tr-br', 'br-tr'
			];

			panel = match.toolbar.panel;
<<<<<<< HEAD

			// Only show the panel on some events not for example nodeChange since that fires when context menu is opened
			if (shouldShow) {
				panel.show();
			}

			elementRect = getElementRect(match.element);
			panelRect = DOM.getRect(panel.getEl());
			contentAreaRect = DOM.getRect(editor.getContentAreaContainer() || editor.getBody());
			smallElementWidthThreshold = 25;

			if (DOM.getStyle(match.element, 'display', true) !== 'inline') {
				// We need to use these instead of the rect values since the style
				// size properites might not be the same as the real size for a table
				elementRect.w = match.element.clientWidth;
				elementRect.h = match.element.clientHeight;
			}
=======
			panel.show();

			elementRect = getElementRect(match.element);
			panelRect = tinymce.DOM.getRect(panel.getEl());
			contentAreaRect = tinymce.DOM.getRect(editor.getContentAreaContainer() || editor.getBody());
			smallElementWidthThreshold = 25;

			// We need to use these instead of the rect values since the style
			// size properites might not be the same as the real size for a table
			elementRect.w = match.element.clientWidth;
			elementRect.h = match.element.clientHeight;
>>>>>>> parent of 6188f9c... WordPress 4.9.1

			if (!editor.inline) {
				contentAreaRect.w = editor.getDoc().documentElement.offsetWidth;
			}

			// Inflate the elementRect so it doesn't get placed above resize handles
			if (editor.selection.controlSelection.isResizable(match.element) && elementRect.w < smallElementWidthThreshold) {
				elementRect = Rect.inflate(elementRect, 0, 8);
			}

			relPos = Rect.findBestRelativePosition(panelRect, elementRect, contentAreaRect, testPositions);
			elementRect = Rect.clamp(elementRect, contentAreaRect);

			if (relPos) {
				relRect = Rect.relativePosition(panelRect, elementRect, relPos);
<<<<<<< HEAD
				movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
=======
				movePanelTo(panel, userConstrain(relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			} else {
				// Allow overflow below the editor to avoid placing toolbars ontop of tables
				contentAreaRect.h += panelRect.h;

				elementRect = Rect.intersect(contentAreaRect, elementRect);
				if (elementRect) {
					relPos = Rect.findBestRelativePosition(panelRect, elementRect, contentAreaRect, [
						'bc-tc', 'bl-tl', 'br-tr'
					]);

					if (relPos) {
						relRect = Rect.relativePosition(panelRect, elementRect, relPos);
<<<<<<< HEAD
						movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
					} else {
						movePanelTo(panel, userConstrain(handler, elementRect.x, elementRect.y, elementRect, contentAreaRect, panelRect));
=======
						movePanelTo(panel, userConstrain(relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
					} else {
						movePanelTo(panel, userConstrain(elementRect.x, elementRect.y, elementRect, contentAreaRect, panelRect));
>>>>>>> parent of 6188f9c... WordPress 4.9.1
					}
				} else {
					panel.hide();
				}
			}

			togglePositionClass(panel, relPos, function(pos1, pos2) {
				return pos1 === pos2;
			});

			//drawRect(contentAreaRect, 'blue');
			//drawRect(elementRect, 'red');
			//drawRect(panelRect, 'green');
<<<<<<< HEAD
		};

		var repositionHandler = function (show) {
			return function () {
				var execute = function () {
					if (editor.selection) {
						reposition(findFrontMostMatch(editor.selection.getNode()), show);
					}
				};

				Delay.requestAnimationFrame(execute);
			};
		};

		var bindScrollEvent = function () {
			if (!scrollContainer) {
				scrollContainer = editor.selection.getScrollContainer() || editor.getWin();
				DOM.bind(scrollContainer, 'scroll', repositionHandler(true));

				editor.on('remove', function() {
					DOM.unbind(scrollContainer, 'scroll');
				});
			}
		};

		var showContextToolbar = function (match) {
=======
		}

		function repositionHandler() {
			function execute() {
				if (editor.selection) {
					reposition(findFrontMostMatch(editor.selection.getNode()));
				}
			}

			tinymce.util.Delay.requestAnimationFrame(execute);
		}

		function bindScrollEvent() {
			if (!scrollContainer) {
				scrollContainer = editor.selection.getScrollContainer() || editor.getWin();
				tinymce.$(scrollContainer).on('scroll', repositionHandler);

				editor.on('remove', function() {
					tinymce.$(scrollContainer).off('scroll');
				});
			}
		}

		function showContextToolbar(match) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			var panel;

			if (match.toolbar.panel) {
				match.toolbar.panel.show();
				reposition(match);
				return;
			}

			bindScrollEvent();

			panel = Factory.create({
				type: 'floatpanel',
				role: 'dialog',
				classes: 'tinymce tinymce-inline arrow',
				ariaLabel: 'Inline toolbar',
				layout: 'flex',
				direction: 'column',
				align: 'stretch',
				autohide: false,
				autofix: true,
				fixed: true,
				border: 1,
<<<<<<< HEAD
				items: Toolbar.createToolbar(editor, match.toolbar.items),
=======
				items: createToolbar(match.toolbar.items),
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				oncancel: function() {
					editor.focus();
				}
			});

			match.toolbar.panel = panel;
			panel.renderTo(document.body).reflow();
			reposition(match);
<<<<<<< HEAD
		};

		var hideAllContextToolbars = function () {
			Tools.each(getContextToolbars(), function(toolbar) {
=======
		}

		function hideAllContextToolbars() {
			tinymce.each(getContextToolbars(), function(toolbar) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				if (toolbar.panel) {
					toolbar.panel.hide();
				}
			});
<<<<<<< HEAD
		};

		var findFrontMostMatch = function (targetElm) {
=======
		}

		function findFrontMostMatch(targetElm) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			var i, y, parentsAndSelf, toolbars = getContextToolbars();

			parentsAndSelf = editor.$(targetElm).parents().add(targetElm);
			for (i = parentsAndSelf.length - 1; i >= 0; i--) {
				for (y = toolbars.length - 1; y >= 0; y--) {
					if (toolbars[y].predicate(parentsAndSelf[i])) {
						return {
							toolbar: toolbars[y],
							element: parentsAndSelf[i]
						};
					}
				}
			}

			return null;
<<<<<<< HEAD
		};

		editor.on('click keyup setContent ObjectResized', function(e) {
			// Only act on partial inserts
			if (e.type === 'setcontent' && !e.selection) {
=======
		}

		editor.on('click keyup setContent', function(e) {
			// Only act on partial inserts
			if (e.type == 'setcontent' && !e.selection) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				return;
			}

			// Needs to be delayed to avoid Chrome img focus out bug
<<<<<<< HEAD
			Delay.setEditorTimeout(editor, function() {
=======
			tinymce.util.Delay.setEditorTimeout(editor, function() {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				var match;

				match = findFrontMostMatch(editor.selection.getNode());
				if (match) {
					hideAllContextToolbars();
					showContextToolbar(match);
				} else {
					hideAllContextToolbars();
				}
			});
		});

<<<<<<< HEAD
		editor.on('blur hide contextmenu', hideAllContextToolbars);
=======
		editor.on('blur hide', hideAllContextToolbars);
>>>>>>> parent of 6188f9c... WordPress 4.9.1

		editor.on('ObjectResizeStart', function() {
			var match = findFrontMostMatch(editor.selection.getNode());

			if (match && match.toolbar.panel) {
				match.toolbar.panel.hide();
			}
		});

<<<<<<< HEAD
		editor.on('ResizeEditor ResizeWindow', repositionHandler(true));
		editor.on('nodeChange', repositionHandler(false));

		editor.on('remove', function() {
			Tools.each(getContextToolbars(), function(toolbar) {
=======
		editor.on('nodeChange ResizeEditor ResizeWindow', repositionHandler);

		editor.on('remove', function() {
			tinymce.each(getContextToolbars(), function(toolbar) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				if (toolbar.panel) {
					toolbar.panel.remove();
				}
			});

			editor.contextToolbars = {};
		});

		editor.shortcuts.add('ctrl+shift+e > ctrl+shift+p', '', function() {
			var match = findFrontMostMatch(editor.selection.getNode());
			if (match && match.toolbar.panel) {
				match.toolbar.panel.items()[0].focus();
			}
		});
<<<<<<< HEAD
	};

	return {
		addContextualToolbars: addContextualToolbars
	};
});

/**
 * A11y.js
>>>>>>> origin/master
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.ui.Resize',
  [
    'tinymce.core.dom.DOMUtils'
  ],
  function (DOMUtils) {
    var DOM = DOMUtils.DOM;
    var getSize = function (elm) {
      return {
        width: elm.clientWidth,
        height: elm.clientHeight
      };
    };

    var resizeTo = function (editor, width, height) {
      var containerElm, iframeElm, containerSize, iframeSize, settings = editor.settings;

      containerElm = editor.getContainer();
      iframeElm = editor.getContentAreaContainer().firstChild;
      containerSize = getSize(containerElm);
      iframeSize = getSize(iframeElm);

      if (width !== null) {
        width = Math.max(settings.min_width || 100, width);
        width = Math.min(settings.max_width || 0xFFFF, width);

        DOM.setStyle(containerElm, 'width', width + (containerSize.width - iframeSize.width));
        DOM.setStyle(iframeElm, 'width', width);
      }

      height = Math.max(settings.min_height || 100, height);
      height = Math.min(settings.max_height || 0xFFFF, height);
      DOM.setStyle(iframeElm, 'height', height);

      editor.fire('ResizeEditor');
    };

    var resizeBy = function (editor, dw, dh) {
      var elm = editor.getContentAreaContainer();
      resizeTo(editor, elm.clientWidth + dw, elm.clientHeight + dh);
    };

    return {
      resizeTo: resizeTo,
      resizeBy: resizeBy
    };
  }
);
=======
define('tinymce.modern.ui.A11y', [
], function () {
	var focus = function (panel, type) {
		return function () {
			var item = panel.find(type)[0];

			if (item) {
				item.focus(true);
			}
		};
	};

	var addKeys = function (editor, panel) {
		editor.shortcuts.add('Alt+F9', '', focus(panel, 'menubar'));
		editor.shortcuts.add('Alt+F10,F10', '', focus(panel, 'toolbar'));
		editor.shortcuts.add('Alt+F11', '', focus(panel, 'elementpath'));
		panel.on('cancel', function() {
			editor.focus();
		});
	};

	return {
		addKeys: addKeys
	};
});
>>>>>>> origin/master

/**
 * Sidebar.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.ui.Sidebar',
  [
    'tinymce.core.util.Tools',
    'tinymce.core.ui.Factory',
    'tinymce.core.Env'
  ],
  function (Tools, Factory, Env) {
    var api = function (elm) {
      return {
        element: function () {
          return elm;
        }
      };
    };

    var trigger = function (sidebar, panel, callbackName) {
      var callback = sidebar.settings[callbackName];
      if (callback) {
        callback(api(panel.getEl('body')));
      }
    };

    var hidePanels = function (name, container, sidebars) {
      Tools.each(sidebars, function (sidebar) {
        var panel = container.items().filter('#' + sidebar.name)[0];

        if (panel && panel.visible() && sidebar.name !== name) {
          trigger(sidebar, panel, 'onhide');
          panel.visible(false);
        }
      });
    };

    var deactivateButtons = function (toolbar) {
      toolbar.items().each(function (ctrl) {
        ctrl.active(false);
      });
    };

    var findSidebar = function (sidebars, name) {
      return Tools.grep(sidebars, function (sidebar) {
        return sidebar.name === name;
      })[0];
    };

    var showPanel = function (editor, name, sidebars) {
      return function (e) {
        var btnCtrl = e.control;
        var container = btnCtrl.parents().filter('panel')[0];
        var panel = container.find('#' + name)[0];
        var sidebar = findSidebar(sidebars, name);

        hidePanels(name, container, sidebars);
        deactivateButtons(btnCtrl.parent());

        if (panel && panel.visible()) {
          trigger(sidebar, panel, 'onhide');
          panel.hide();
          btnCtrl.active(false);
        } else {
          if (panel) {
            panel.show();
            trigger(sidebar, panel, 'onshow');
          } else {
            panel = Factory.create({
              type: 'container',
              name: name,
              layout: 'stack',
              classes: 'sidebar-panel',
              html: ''
            });

            container.prepend(panel);
            trigger(sidebar, panel, 'onrender');
            trigger(sidebar, panel, 'onshow');
          }

          btnCtrl.active(true);
        }

        editor.fire('ResizeEditor');
      };
    };

    var isModernBrowser = function () {
      return !Env.ie || Env.ie >= 11;
    };

    var hasSidebar = function (editor) {
      return isModernBrowser() && editor.sidebars ? editor.sidebars.length > 0 : false;
    };

    var createSidebar = function (editor) {
      var buttons = Tools.map(editor.sidebars, function (sidebar) {
        var settings = sidebar.settings;

        return {
          type: 'button',
          icon: settings.icon,
          image: settings.image,
          tooltip: settings.tooltip,
          onclick: showPanel(editor, sidebar.name, editor.sidebars)
        };
      });

      return {
        type: 'panel',
        name: 'sidebar',
        layout: 'stack',
        classes: 'sidebar',
        items: [
          {
            type: 'toolbar',
            layout: 'stack',
            classes: 'sidebar-toolbar',
            items: buttons
          }
        ]
      };
    };

    return {
      hasSidebar: hasSidebar,
      createSidebar: createSidebar
    };
  }
);
=======
define('tinymce.modern.ui.Sidebar', [
	'global!tinymce.util.Tools',
	'global!tinymce.ui.Factory',
	'global!tinymce.Env'
], function (Tools, Factory, Env) {
	var api = function (elm) {
		return {
			element: function () {
				return elm;
			}
		};
	};

	var trigger = function (sidebar, panel, callbackName) {
		var callback = sidebar.settings[callbackName];
		if (callback) {
			callback(api(panel.getEl('body')));
		}
	};

	var hidePanels = function (name, container, sidebars) {
		Tools.each(sidebars, function (sidebar) {
			var panel = container.items().filter('#' + sidebar.name)[0];

			if (panel && panel.visible() && sidebar.name !== name) {
				trigger(sidebar, panel, 'onhide');
				panel.visible(false);
			}
		});
	};

	var deactivateButtons = function (toolbar) {
		toolbar.items().each(function (ctrl) {
			ctrl.active(false);
		});
	};

	var findSidebar = function (sidebars, name) {
		return Tools.grep(sidebars, function (sidebar) {
			return sidebar.name === name;
		})[0];
	};

	var showPanel = function (editor, name, sidebars) {
		return function (e) {
			var btnCtrl = e.control;
			var container = btnCtrl.parents().filter('panel')[0];
			var panel = container.find('#' + name)[0];
			var sidebar = findSidebar(sidebars, name);

			hidePanels(name, container, sidebars);
			deactivateButtons(btnCtrl.parent());

			if (panel && panel.visible()) {
				trigger(sidebar, panel, 'onhide');
				panel.hide();
				btnCtrl.active(false);
			} else {
				if (panel) {
					panel.show();
					trigger(sidebar, panel, 'onshow');
				} else {
					panel = Factory.create({
						type: 'container',
						name: name,
						layout: 'stack',
						classes: 'sidebar-panel',
						html: ''
					});

					container.prepend(panel);
					trigger(sidebar, panel, 'onrender');
					trigger(sidebar, panel, 'onshow');
				}

				btnCtrl.active(true);
			}

			editor.fire('ResizeEditor');
		};
	};

	var isModernBrowser = function () {
		return !Env.ie || Env.ie >= 11;
	};

	var hasSidebar = function (editor) {
		return isModernBrowser() && editor.sidebars ? editor.sidebars.length > 0 : false;
	};

	var createSidebar = function (editor) {
		var buttons = Tools.map(editor.sidebars, function (sidebar) {
			var settings = sidebar.settings;

			return {
				type: 'button',
				icon: settings.icon,
				image: settings.image,
				tooltip: settings.tooltip,
				onclick: showPanel(editor, sidebar.name, editor.sidebars)
			};
		});

		return {
			type: 'panel',
			name: 'sidebar',
			layout: 'stack',
			classes: 'sidebar',
			items: [
				{
					type: 'toolbar',
					layout: 'stack',
					classes: 'sidebar-toolbar',
					items: buttons
				}
			]
		};
	};

	return {
		hasSidebar: hasSidebar,
		createSidebar: createSidebar
	};
});
>>>>>>> origin/master
/**
 * SkinLoaded.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.ui.SkinLoaded', [
  ],
  function () {
    var fireSkinLoaded = function (editor) {
      var done = function () {
        editor._skinLoaded = true;
        editor.fire('SkinLoaded');
      };

      return function () {
        if (editor.initialized) {
          done();
        } else {
          editor.on('init', done);
        }
      };
    };

    return {
      fireSkinLoaded: fireSkinLoaded
    };
  }
);

/**
 * Iframe.js
=======
define('tinymce.modern.ui.SkinLoaded', [
], function () {
	var fireSkinLoaded = function (editor) {
		var done = function () {
			editor._skinLoaded = true;
			editor.fire('SkinLoaded');
		};

		return function() {
			if (editor.initialized) {
				done();
			} else {
				editor.on('init', done);
			}
		};
	};

	return {
		fireSkinLoaded: fireSkinLoaded
	};
});

/**
 * Resize.js
>>>>>>> origin/master
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.modes.Iframe',
  [
    'tinymce.core.dom.DOMUtils',
    'tinymce.core.ui.Factory',
    'tinymce.core.util.Tools',
    'tinymce.themes.modern.ui.A11y',
    'tinymce.themes.modern.ui.Branding',
    'tinymce.themes.modern.ui.ContextToolbars',
    'tinymce.themes.modern.ui.Menubar',
    'tinymce.themes.modern.ui.Resize',
    'tinymce.themes.modern.ui.Sidebar',
    'tinymce.themes.modern.ui.SkinLoaded',
    'tinymce.themes.modern.ui.Toolbar'
  ],
  function (DOMUtils, Factory, Tools, A11y, Branding, ContextToolbars, Menubar, Resize, Sidebar, SkinLoaded, Toolbar) {
    var DOM = DOMUtils.DOM;

    var switchMode = function (panel) {
      return function (e) {
        panel.find('*').disabled(e.mode === 'readonly');
      };
    };

    var editArea = function (border) {
      return {
        type: 'panel',
        name: 'iframe',
        layout: 'stack',
        classes: 'edit-area',
        border: border,
        html: ''
      };
    };

    var editAreaContainer = function (editor) {
      return {
        type: 'panel',
        layout: 'stack',
        classes: 'edit-aria-container',
        border: '1 0 0 0',
        items: [
          editArea('0'),
          Sidebar.createSidebar(editor)
        ]
      };
    };

    var render = function (editor, theme, args) {
      var panel, resizeHandleCtrl, startSize, settings = editor.settings;

      if (args.skinUiCss) {
        DOM.styleSheetLoader.load(args.skinUiCss, SkinLoaded.fireSkinLoaded(editor));
      }

      panel = theme.panel = Factory.create({
        type: 'panel',
        role: 'application',
        classes: 'tinymce',
        style: 'visibility: hidden',
        layout: 'stack',
        border: 1,
        items: [
          settings.menubar === false ? null : { type: 'menubar', border: '0 0 1 0', items: Menubar.createMenuButtons(editor) },
          Toolbar.createToolbars(editor, settings.toolbar_items_size),
          Sidebar.hasSidebar(editor) ? editAreaContainer(editor) : editArea('1 0 0 0')
        ]
      });

      if (settings.resize !== false) {
        resizeHandleCtrl = {
          type: 'resizehandle',
          direction: settings.resize,

          onResizeStart: function () {
            var elm = editor.getContentAreaContainer().firstChild;

            startSize = {
              width: elm.clientWidth,
              height: elm.clientHeight
            };
          },

          onResize: function (e) {
            if (settings.resize === 'both') {
              Resize.resizeTo(editor, startSize.width + e.deltaX, startSize.height + e.deltaY);
            } else {
              Resize.resizeTo(editor, null, startSize.height + e.deltaY);
            }
          }
        };
      }

      // Add statusbar if needed
      if (settings.statusbar !== false) {
        panel.add({
          type: 'panel', name: 'statusbar', classes: 'statusbar', layout: 'flow', border: '1 0 0 0', ariaRoot: true, items: [
            { type: 'elementpath', editor: editor },
            resizeHandleCtrl
          ]
        });
      }

      editor.fire('BeforeRenderUI');
      editor.on('SwitchMode', switchMode(panel));
      panel.renderBefore(args.targetNode).reflow();

      if (settings.readonly) {
        editor.setMode('readonly');
      }

      if (args.width) {
        DOM.setStyle(panel.getEl(), 'width', args.width);
      }

      // Remove the panel when the editor is removed
      editor.on('remove', function () {
        panel.remove();
        panel = null;
      });

      // Add accesibility shortcuts
      A11y.addKeys(editor, panel);
      ContextToolbars.addContextualToolbars(editor);
      Branding.setup(editor);

      return {
        iframeContainer: panel.find('#iframe')[0].getEl(),
        editorContainer: panel.getEl()
      };
    };

    return {
      render: render
    };
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
=======
define('tinymce.modern.ui.Resize', [
	'global!tinymce.DOM'
], function (DOM) {
	var getSize = function (elm) {
		return {
			width: elm.clientWidth,
			height: elm.clientHeight
		};
	};

	var resizeTo = function (editor, width, height) {
		var containerElm, iframeElm, containerSize, iframeSize, settings = editor.settings;

		containerElm = editor.getContainer();
		iframeElm = editor.getContentAreaContainer().firstChild;
		containerSize = getSize(containerElm);
		iframeSize = getSize(iframeElm);

		if (width !== null) {
			width = Math.max(settings.min_width || 100, width);
			width = Math.min(settings.max_width || 0xFFFF, width);

			DOM.setStyle(containerElm, 'width', width + (containerSize.width - iframeSize.width));
			DOM.setStyle(iframeElm, 'width', width);
		}

		height = Math.max(settings.min_height || 100, height);
		height = Math.min(settings.max_height || 0xFFFF, height);
		DOM.setStyle(iframeElm, 'height', height);

		editor.fire('ResizeEditor');
	};

	var resizeBy = function (editor, dw, dh) {
		var elm = editor.getContentAreaContainer();
		resizeTo(editor, elm.clientWidth + dw, elm.clientHeight + dh);
	};

	return {
		resizeTo: resizeTo,
		resizeBy: resizeBy
	};
});

/**
 * Iframe.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
>>>>>>> origin/master
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.core.ui.FloatPanel',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.ui.FloatPanel');
  }
);

=======
define('tinymce.modern.modes.Iframe', [
	'global!tinymce.util.Tools',
	'global!tinymce.ui.Factory',
	'global!tinymce.DOM',
	'tinymce.modern.ui.Toolbar',
	'tinymce.modern.ui.Menubar',
	'tinymce.modern.ui.ContextToolbars',
	'tinymce.modern.ui.A11y',
	'tinymce.modern.ui.Sidebar',
	'tinymce.modern.ui.SkinLoaded',
	'tinymce.modern.ui.Resize'
], function (Tools, Factory, DOM, Toolbar, Menubar, ContextToolbars, A11y, Sidebar, SkinLoaded, Resize) {
	var switchMode = function (panel) {
		return function(e) {
			panel.find('*').disabled(e.mode === 'readonly');
		};
	};

	var editArea = function (border) {
		return {
			type: 'panel',
			name: 'iframe',
			layout: 'stack',
			classes: 'edit-area',
			border: border,
			html: ''
		};
	};

	var editAreaContainer = function (editor) {
		return {
			type: 'panel',
			layout: 'stack',
			classes: 'edit-aria-container',
			border: '1 0 0 0',
			items: [
				editArea('0'),
				Sidebar.createSidebar(editor)
			]
		};
	};

	var render = function (editor, theme, args) {
		var panel, resizeHandleCtrl, startSize, settings = editor.settings;

		if (args.skinUiCss) {
			DOM.styleSheetLoader.load(args.skinUiCss, SkinLoaded.fireSkinLoaded(editor));
		}

		panel = theme.panel = Factory.create({
			type: 'panel',
			role: 'application',
			classes: 'tinymce',
			style: 'visibility: hidden',
			layout: 'stack',
			border: 1,
			items: [
				settings.menubar === false ? null : {type: 'menubar', border: '0 0 1 0', items: Menubar.createMenuButtons(editor)},
				Toolbar.createToolbars(editor, settings.toolbar_items_size),
				Sidebar.hasSidebar(editor) ? editAreaContainer(editor) : editArea('1 0 0 0')
			]
		});

		if (settings.resize !== false) {
			resizeHandleCtrl = {
				type: 'resizehandle',
				direction: settings.resize,

				onResizeStart: function() {
					var elm = editor.getContentAreaContainer().firstChild;

					startSize = {
						width: elm.clientWidth,
						height: elm.clientHeight
					};
				},

				onResize: function(e) {
					if (settings.resize === 'both') {
						Resize.resizeTo(editor, startSize.width + e.deltaX, startSize.height + e.deltaY);
					} else {
						Resize.resizeTo(editor, null, startSize.height + e.deltaY);
					}
				}
			};
		}

		// Add statusbar if needed
		if (settings.statusbar !== false) {
			panel.add({type: 'panel', name: 'statusbar', classes: 'statusbar', layout: 'flow', border: '1 0 0 0', ariaRoot: true, items: [
				{type: 'elementpath', editor: editor},
				resizeHandleCtrl
			]});
		}

		editor.fire('BeforeRenderUI');
		editor.on('SwitchMode', switchMode(panel));
		panel.renderBefore(args.targetNode).reflow();

		if (settings.readonly) {
			editor.setMode('readonly');
		}

		if (settings.width) {
			DOM.setStyle(panel.getEl(), 'width', settings.width);
		}

		// Remove the panel when the editor is removed
		editor.on('remove', function() {
			panel.remove();
			panel = null;
		});

		// Add accesibility shortcuts
		A11y.addKeys(editor, panel);
		ContextToolbars.addContextualToolbars(editor);

		return {
			iframeContainer: panel.find('#iframe')[0].getEl(),
			editorContainer: panel.getEl()
		};
	};

	return {
		render: render
	};
});

defineGlobal("global!tinymce.ui.FloatPanel", tinymce.ui.FloatPanel);
>>>>>>> origin/master
/**
 * Inline.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.modes.Inline',
  [
    'tinymce.core.util.Tools',
    'tinymce.core.ui.Factory',
    'tinymce.core.dom.DOMUtils',
    'tinymce.core.ui.FloatPanel',
    'tinymce.themes.modern.ui.Toolbar',
    'tinymce.themes.modern.ui.Menubar',
    'tinymce.themes.modern.ui.ContextToolbars',
    'tinymce.themes.modern.ui.A11y',
    'tinymce.themes.modern.ui.SkinLoaded'
  ],
  function (Tools, Factory, DOMUtils, FloatPanel, Toolbar, Menubar, ContextToolbars, A11y, SkinLoaded) {
    var render = function (editor, theme, args) {
      var panel, inlineToolbarContainer, settings = editor.settings;
      var DOM = DOMUtils.DOM;

      if (settings.fixed_toolbar_container) {
        inlineToolbarContainer = DOM.select(settings.fixed_toolbar_container)[0];
      }

      var reposition = function () {
        if (panel && panel.moveRel && panel.visible() && !panel._fixed) {
          // TODO: This is kind of ugly and doesn't handle multiple scrollable elements
          var scrollContainer = editor.selection.getScrollContainer(), body = editor.getBody();
          var deltaX = 0, deltaY = 0;

          if (scrollContainer) {
            var bodyPos = DOM.getPos(body), scrollContainerPos = DOM.getPos(scrollContainer);

            deltaX = Math.max(0, scrollContainerPos.x - bodyPos.x);
            deltaY = Math.max(0, scrollContainerPos.y - bodyPos.y);
          }

          panel.fixed(false).moveRel(body, editor.rtl ? ['tr-br', 'br-tr'] : ['tl-bl', 'bl-tl', 'tr-br']).moveBy(deltaX, deltaY);
        }
      };

      var show = function () {
        if (panel) {
          panel.show();
          reposition();
          DOM.addClass(editor.getBody(), 'mce-edit-focus');
        }
      };

      var hide = function () {
        if (panel) {
          // We require two events as the inline float panel based toolbar does not have autohide=true
          panel.hide();

          // All other autohidden float panels will be closed below.
          FloatPanel.hideAll();

          DOM.removeClass(editor.getBody(), 'mce-edit-focus');
        }
      };

      var render = function () {
        if (panel) {
          if (!panel.visible()) {
            show();
          }

          return;
        }

        // Render a plain panel inside the inlineToolbarContainer if it's defined
        panel = theme.panel = Factory.create({
          type: inlineToolbarContainer ? 'panel' : 'floatpanel',
          role: 'application',
          classes: 'tinymce tinymce-inline',
          layout: 'flex',
          direction: 'column',
          align: 'stretch',
          autohide: false,
          autofix: true,
          fixed: !!inlineToolbarContainer,
          border: 1,
          items: [
            settings.menubar === false ? null : { type: 'menubar', border: '0 0 1 0', items: Menubar.createMenuButtons(editor) },
            Toolbar.createToolbars(editor, settings.toolbar_items_size)
          ]
        });

        // Add statusbar
        /*if (settings.statusbar !== false) {
          panel.add({type: 'panel', classes: 'statusbar', layout: 'flow', border: '1 0 0 0', items: [
            {type: 'elementpath'}
          ]});
        }*/

        editor.fire('BeforeRenderUI');
        panel.renderTo(inlineToolbarContainer || document.body).reflow();

        A11y.addKeys(editor, panel);
        show();
        ContextToolbars.addContextualToolbars(editor);

        editor.on('nodeChange', reposition);
        editor.on('activate', show);
        editor.on('deactivate', hide);

        editor.nodeChanged();
      };

      settings.content_editable = true;

      editor.on('focus', function () {
        // Render only when the CSS file has been loaded
        if (args.skinUiCss) {
          DOM.styleSheetLoader.load(args.skinUiCss, render, render);
        } else {
          render();
        }
      });

      editor.on('blur hide', hide);

      // Remove the panel when the editor is removed
      editor.on('remove', function () {
        if (panel) {
          panel.remove();
          panel = null;
        }
      });

      // Preload skin css
      if (args.skinUiCss) {
        DOM.styleSheetLoader.load(args.skinUiCss, SkinLoaded.fireSkinLoaded(editor));
      }

      return {};
    };

    return {
      render: render
    };
  }
);

/**
 * ResolveGlobal.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

define(
  'tinymce.core.ui.Throbber',
  [
    'global!tinymce.util.Tools.resolve'
  ],
  function (resolve) {
    return resolve('tinymce.ui.Throbber');
  }
);

=======
define('tinymce.modern.modes.Inline', [
	'global!tinymce.util.Tools',
	'global!tinymce.ui.Factory',
	'global!tinymce.DOM',
	'global!tinymce.ui.FloatPanel',
	'tinymce.modern.ui.Toolbar',
	'tinymce.modern.ui.Menubar',
	'tinymce.modern.ui.ContextToolbars',
	'tinymce.modern.ui.A11y',
	'tinymce.modern.ui.SkinLoaded'
], function (Tools, Factory, DOM, FloatPanel, Toolbar, Menubar, ContextToolbars, A11y, SkinLoaded) {
	var render = function (editor, theme, args) {
		var panel, inlineToolbarContainer, settings = editor.settings;
=======
	}

	function fireSkinLoaded(editor) {
		return function() {
			if (editor.initialized) {
				editor.fire('SkinLoaded');
			} else {
				editor.on('init', function() {
					editor.fire('SkinLoaded');
				});
			}
		};
	}

	/**
	 * Renders the inline editor UI.
	 *
	 * @return {Object} Name/value object with theme data.
	 */
	function renderInlineUI(args) {
		var panel, inlineToolbarContainer;
>>>>>>> parent of 6188f9c... WordPress 4.9.1

		if (settings.fixed_toolbar_container) {
			inlineToolbarContainer = DOM.select(settings.fixed_toolbar_container)[0];
		}

<<<<<<< HEAD
		var reposition = function () {
=======
		function reposition() {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			if (panel && panel.moveRel && panel.visible() && !panel._fixed) {
				// TODO: This is kind of ugly and doesn't handle multiple scrollable elements
				var scrollContainer = editor.selection.getScrollContainer(), body = editor.getBody();
				var deltaX = 0, deltaY = 0;

				if (scrollContainer) {
					var bodyPos = DOM.getPos(body), scrollContainerPos = DOM.getPos(scrollContainer);

					deltaX = Math.max(0, scrollContainerPos.x - bodyPos.x);
					deltaY = Math.max(0, scrollContainerPos.y - bodyPos.y);
				}

				panel.fixed(false).moveRel(body, editor.rtl ? ['tr-br', 'br-tr'] : ['tl-bl', 'bl-tl', 'tr-br']).moveBy(deltaX, deltaY);
			}
<<<<<<< HEAD
		};

		var show = function () {
=======
		}

		function show() {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			if (panel) {
				panel.show();
				reposition();
				DOM.addClass(editor.getBody(), 'mce-edit-focus');
			}
<<<<<<< HEAD
		};

		var hide = function () {
=======
		}

		function hide() {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			if (panel) {
				// We require two events as the inline float panel based toolbar does not have autohide=true
				panel.hide();

				// All other autohidden float panels will be closed below.
				FloatPanel.hideAll();

				DOM.removeClass(editor.getBody(), 'mce-edit-focus');
			}
<<<<<<< HEAD
		};

		var render = function () {
=======
		}

		function render() {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			if (panel) {
				if (!panel.visible()) {
					show();
				}

				return;
			}

			// Render a plain panel inside the inlineToolbarContainer if it's defined
<<<<<<< HEAD
			panel = theme.panel = Factory.create({
=======
			panel = self.panel = Factory.create({
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				type: inlineToolbarContainer ? 'panel' : 'floatpanel',
				role: 'application',
				classes: 'tinymce tinymce-inline',
				layout: 'flex',
				direction: 'column',
				align: 'stretch',
				autohide: false,
				autofix: true,
				fixed: !!inlineToolbarContainer,
				border: 1,
				items: [
<<<<<<< HEAD
					settings.menubar === false ? null : {type: 'menubar', border: '0 0 1 0', items: Menubar.createMenuButtons(editor)},
					Toolbar.createToolbars(editor, settings.toolbar_items_size)
=======
					settings.menubar === false ? null : {type: 'menubar', border: '0 0 1 0', items: createMenuButtons()},
					createToolbars(settings.toolbar_items_size)
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				]
			});

			// Add statusbar
			/*if (settings.statusbar !== false) {
				panel.add({type: 'panel', classes: 'statusbar', layout: 'flow', border: '1 0 0 0', items: [
					{type: 'elementpath'}
				]});
			}*/

			editor.fire('BeforeRenderUI');
			panel.renderTo(inlineToolbarContainer || document.body).reflow();

<<<<<<< HEAD
			A11y.addKeys(editor, panel);
			show();
			ContextToolbars.addContextualToolbars(editor);
=======
			addAccessibilityKeys(panel);
			show();
			addContextualToolbars();
>>>>>>> parent of 6188f9c... WordPress 4.9.1

			editor.on('nodeChange', reposition);
			editor.on('activate', show);
			editor.on('deactivate', hide);

			editor.nodeChanged();
<<<<<<< HEAD
		};
=======
		}
>>>>>>> parent of 6188f9c... WordPress 4.9.1

		settings.content_editable = true;

		editor.on('focus', function() {
			// Render only when the CSS file has been loaded
			if (args.skinUiCss) {
<<<<<<< HEAD
				DOM.styleSheetLoader.load(args.skinUiCss, render, render);
=======
				tinymce.DOM.styleSheetLoader.load(args.skinUiCss, render, render);
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			} else {
				render();
			}
		});

		editor.on('blur hide', hide);

		// Remove the panel when the editor is removed
		editor.on('remove', function() {
			if (panel) {
				panel.remove();
				panel = null;
			}
		});

		// Preload skin css
		if (args.skinUiCss) {
<<<<<<< HEAD
			DOM.styleSheetLoader.load(args.skinUiCss, SkinLoaded.fireSkinLoaded(editor));
		}

		return {};
	};

	return {
		render: render
	};
});

defineGlobal("global!tinymce.ui.Throbber", tinymce.ui.Throbber);
>>>>>>> origin/master
/**
 * ProgressState.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.ui.ProgressState',
  [
    'tinymce.core.ui.Throbber'
  ],
  function (Throbber) {
    var setup = function (editor, theme) {
      var throbber;

      editor.on('ProgressState', function (e) {
        throbber = throbber || new Throbber(theme.panel.getEl('body'));

        if (e.state) {
          throbber.show(e.time);
        } else {
          throbber.hide();
        }
      });
    };

    return {
      setup: setup
    };
  }
);
=======
define('tinymce.modern.ui.ProgressState', [
	'global!tinymce.ui.Throbber'
], function (Throbber) {
	var setup = function (editor, theme) {
		var throbber;

		editor.on('ProgressState', function(e) {
			throbber = throbber || new Throbber(theme.panel.getEl('body'));

			if (e.state) {
				throbber.show(e.time);
			} else {
				throbber.hide();
			}
		});
	};

	return {
		setup: setup
	};
});
>>>>>>> origin/master

/**
 * Theme.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

<<<<<<< HEAD
define(
  'tinymce.themes.modern.Theme',
  [
    'global!window',
    'tinymce.core.AddOnManager',
    'tinymce.core.EditorManager',
    'tinymce.core.Env',
    'tinymce.core.ui.Api',
    'tinymce.themes.modern.modes.Iframe',
    'tinymce.themes.modern.modes.Inline',
    'tinymce.themes.modern.ui.ProgressState',
    'tinymce.themes.modern.ui.Resize'
  ],
  function (window, AddOnManager, EditorManager, Env, Api, Iframe, Inline, ProgressState, Resize) {
    var ThemeManager = AddOnManager.ThemeManager;

    Api.appendTo(window.tinymce ? window.tinymce : {});

    var renderUI = function (editor, theme, args) {
      var settings = editor.settings;
      var skin = settings.skin !== false ? settings.skin || 'lightgray' : false;

      if (skin) {
        var skinUrl = settings.skin_url;

        if (skinUrl) {
          skinUrl = editor.documentBaseURI.toAbsolute(skinUrl);
        } else {
          skinUrl = EditorManager.baseURL + '/skins/' + skin;
        }

        args.skinUiCss = skinUrl + '/skin.min.css';

        // Load content.min.css or content.inline.min.css
        editor.contentCSS.push(skinUrl + '/content' + (editor.inline ? '.inline' : '') + '.min.css');
      }

      ProgressState.setup(editor, theme);

      if (settings.inline) {
        return Inline.render(editor, theme, args);
      }

      return Iframe.render(editor, theme, args);
    };

    ThemeManager.add('modern', function (editor) {
      return {
        renderUI: function (args) {
          return renderUI(editor, this, args);
        },
        resizeTo: function (w, h) {
          return Resize.resizeTo(editor, w, h);
        },
        resizeBy: function (dw, dh) {
          return Resize.resizeBy(editor, dw, dh);
        }
      };
    });

    return function () {
    };
  }
);

dem('tinymce.themes.modern.Theme')();
=======
define('tinymce.modern.Theme', [
	'global!tinymce.Env',
	'global!tinymce.EditorManager',
	'global!tinymce.ThemeManager',
	'tinymce.modern.modes.Iframe',
	'tinymce.modern.modes.Inline',
	'tinymce.modern.ui.Resize',
	'tinymce.modern.ui.ProgressState'
], function (Env, EditorManager, ThemeManager, Iframe, Inline, Resize, ProgressState) {
	var renderUI = function(editor, theme, args) {
		var settings = editor.settings;
=======
			tinymce.DOM.styleSheetLoader.load(args.skinUiCss, fireSkinLoaded(editor));
		}

		return {};
	}

	/**
	 * Renders the iframe editor UI.
	 *
	 * @param {Object} args Details about target element etc.
	 * @return {Object} Name/value object with theme data.
	 */
	function renderIframeUI(args) {
		var panel, resizeHandleCtrl, startSize;

		function switchMode() {
			return function(e) {
				if (e.mode == 'readonly') {
					panel.find('*').disabled(true);
				} else {
					panel.find('*').disabled(false);
				}
			};
		}

		if (args.skinUiCss) {
			tinymce.DOM.styleSheetLoader.load(args.skinUiCss, fireSkinLoaded(editor));
		}

		// Basic UI layout
		panel = self.panel = Factory.create({
			type: 'panel',
			role: 'application',
			classes: 'tinymce',
			style: 'visibility: hidden',
			layout: 'stack',
			border: 1,
			items: [
				settings.menubar === false ? null : {type: 'menubar', border: '0 0 1 0', items: createMenuButtons()},
				createToolbars(settings.toolbar_items_size),
				{type: 'panel', name: 'iframe', layout: 'stack', classes: 'edit-area', html: '', border: '1 0 0 0'}
			]
		});

		if (settings.resize !== false) {
			resizeHandleCtrl = {
				type: 'resizehandle',
				direction: settings.resize,

				onResizeStart: function() {
					var elm = editor.getContentAreaContainer().firstChild;

					startSize = {
						width: elm.clientWidth,
						height: elm.clientHeight
					};
				},

				onResize: function(e) {
					if (settings.resize == 'both') {
						resizeTo(startSize.width + e.deltaX, startSize.height + e.deltaY);
					} else {
						resizeTo(null, startSize.height + e.deltaY);
					}
				}
			};
		}

		// Add statusbar if needed
		if (settings.statusbar !== false) {
			panel.add({type: 'panel', name: 'statusbar', classes: 'statusbar', layout: 'flow', border: '1 0 0 0', ariaRoot: true, items: [
				{type: 'elementpath', editor: editor},
				resizeHandleCtrl
			]});
		}

		editor.fire('BeforeRenderUI');
		editor.on('SwitchMode', switchMode());
		panel.renderBefore(args.targetNode).reflow();

		if (settings.readonly) {
			editor.setMode('readonly');
		}

		if (settings.width) {
			tinymce.DOM.setStyle(panel.getEl(), 'width', settings.width);
		}

		// Remove the panel when the editor is removed
		editor.on('remove', function() {
			panel.remove();
			panel = null;
		});

		// Add accesibility shortcuts
		addAccessibilityKeys(panel);
		addContextualToolbars();

		return {
			iframeContainer: panel.find('#iframe')[0].getEl(),
			editorContainer: panel.getEl()
		};
	}

	/**
	 * Renders the UI for the theme. This gets called by the editor.
	 *
	 * @param {Object} args Details about target element etc.
	 * @return {Object} Theme UI data items.
	 */
	self.renderUI = function(args) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
		var skin = settings.skin !== false ? settings.skin || 'lightgray' : false;

		if (skin) {
			var skinUrl = settings.skin_url;

			if (skinUrl) {
				skinUrl = editor.documentBaseURI.toAbsolute(skinUrl);
			} else {
<<<<<<< HEAD
				skinUrl = EditorManager.baseURL + '/skins/' + skin;
=======
				skinUrl = tinymce.baseURL + '/skins/' + skin;
>>>>>>> parent of 6188f9c... WordPress 4.9.1
			}

			// Load special skin for IE7
			// TODO: Remove this when we drop IE7 support
<<<<<<< HEAD
			if (Env.documentMode <= 7) {
=======
			if (tinymce.Env.documentMode <= 7) {
>>>>>>> parent of 6188f9c... WordPress 4.9.1
				args.skinUiCss = skinUrl + '/skin.ie7.min.css';
			} else {
				args.skinUiCss = skinUrl + '/skin.min.css';
			}

			// Load content.min.css or content.inline.min.css
			editor.contentCSS.push(skinUrl + '/content' + (editor.inline ? '.inline' : '') + '.min.css');
		}

<<<<<<< HEAD
		ProgressState.setup(editor, theme);

		if (settings.inline) {
			return Inline.render(editor, theme, args);
		}

		return Iframe.render(editor, theme, args);
	};

	ThemeManager.add('modern', function (editor) {
		return {
			renderUI: function (args) {
				return renderUI(editor, this, args);
			},
			resizeTo: function (w, h) {
				return Resize.resizeTo(editor, w, h);
			},
			resizeBy: function (dw, dh) {
				return Resize.resizeBy(editor, dw, dh);
			}
		};
	});

	return function () {
	};
});

dem('tinymce.modern.Theme')();
>>>>>>> origin/master
})();
=======
		// Handle editor setProgressState change
		editor.on('ProgressState', function(e) {
			self.throbber = self.throbber || new tinymce.ui.Throbber(self.panel.getEl('body'));

			if (e.state) {
				self.throbber.show(e.time);
			} else {
				self.throbber.hide();
			}
		});

		if (settings.inline) {
			return renderInlineUI(args);
		}

		return renderIframeUI(args);
	};

	self.resizeTo = resizeTo;
	self.resizeBy = resizeBy;
});
>>>>>>> parent of 6188f9c... WordPress 4.9.1
