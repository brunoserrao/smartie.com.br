<?php

// autoload_real_52.php generated by xrstf/composer-php52

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
class ComposerAutoloaderInita1ed0494cfc3f6407584f55896c35bcf {
=======
class ComposerAutoloaderInit4dc707105fc640cf229f5c568acd354f {
>>>>>>> origin/master
=======
class ComposerAutoloaderInit541c0dc3d2f08af0d23e4f44958746d3 {
>>>>>>> parent of 142d053... MailChimp for WordPress
=======
class ComposerAutoloaderInite220b9cdf73db6b31110859155e3018a {
>>>>>>> parent of e5b28b8... Mailchimp updates
	private static $loader;

	public static function loadClassLoader($class) {
		if ('xrstf_Composer52_ClassLoader' === $class) {
			require dirname(__FILE__).'/ClassLoader52.php';
		}
	}

	/**
	 * @return xrstf_Composer52_ClassLoader
	 */
	public static function getLoader() {
		if (null !== self::$loader) {
			return self::$loader;
		}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		spl_autoload_register(array('ComposerAutoloaderInita1ed0494cfc3f6407584f55896c35bcf', 'loadClassLoader'), true /*, true */);
		self::$loader = $loader = new xrstf_Composer52_ClassLoader();
		spl_autoload_unregister(array('ComposerAutoloaderInita1ed0494cfc3f6407584f55896c35bcf', 'loadClassLoader'));
=======
		spl_autoload_register(array('ComposerAutoloaderInit4dc707105fc640cf229f5c568acd354f', 'loadClassLoader'), true /*, true */);
		self::$loader = $loader = new xrstf_Composer52_ClassLoader();
		spl_autoload_unregister(array('ComposerAutoloaderInit4dc707105fc640cf229f5c568acd354f', 'loadClassLoader'));
>>>>>>> origin/master
=======
		spl_autoload_register(array('ComposerAutoloaderInit541c0dc3d2f08af0d23e4f44958746d3', 'loadClassLoader'), true /*, true */);
		self::$loader = $loader = new xrstf_Composer52_ClassLoader();
		spl_autoload_unregister(array('ComposerAutoloaderInit541c0dc3d2f08af0d23e4f44958746d3', 'loadClassLoader'));
>>>>>>> parent of 142d053... MailChimp for WordPress
=======
		spl_autoload_register(array('ComposerAutoloaderInite220b9cdf73db6b31110859155e3018a', 'loadClassLoader'), true /*, true */);
		self::$loader = $loader = new xrstf_Composer52_ClassLoader();
		spl_autoload_unregister(array('ComposerAutoloaderInite220b9cdf73db6b31110859155e3018a', 'loadClassLoader'));
>>>>>>> parent of e5b28b8... Mailchimp updates

		$vendorDir = dirname(dirname(__FILE__));
		$baseDir   = dirname($vendorDir);
		$dir       = dirname(__FILE__);

		$map = require $dir.'/autoload_namespaces.php';
		foreach ($map as $namespace => $path) {
			$loader->add($namespace, $path);
		}

		$classMap = require $dir.'/autoload_classmap.php';
		if ($classMap) {
			$loader->addClassMap($classMap);
		}

		$loader->register(true);

		require $baseDir . '/includes/functions.php';
		require $baseDir . '/includes/deprecated-functions.php';
		require $baseDir . '/includes/forms/functions.php';
		require $baseDir . '/includes/integrations/functions.php';
		require $baseDir . '/includes/default-actions.php';
		require $baseDir . '/includes/default-filters.php';

		return $loader;
	}
}
