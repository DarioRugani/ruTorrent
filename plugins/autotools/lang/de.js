/*
 * PLUGIN AUTOTOOLS
 *
 * German language file.
 *
 * Author: Dario Rugani (kontakt@rugani.de)
 */

 var s_PluginFail			= "Plugin wird nicht funktionieren.";

 theUILang.autotools			= "Autotools";
 theUILang.autotoolsEnableLabel		= "Aktiviere \"AutoLabel\" Funktion, Template:";
 theUILang.autotoolsPathToFinished	= "Pfad abgeschlossenen Downloads";
 theUILang.autotoolsEnableWatch		= "Aktiviere \"AutoWatch\" Funktion";
 theUILang.autotoolsPathToWatch		= "Pfad zum Basis-Überwachungsverzeichnis";
 theUILang.autotoolsWatchStart		= "Download automatisch starten";
 theUILang.autotoolsNoPathToFinished	= "Autotools Plugin: Der Pfad zu den fertigen Downloads ist nicht gesetzt. " + s_PluginFail;
 theUILang.autotoolsNoPathToWatch	= "Autotools Plugin: Pfad zum Basis-Überwachungsverzeichnis ist nicht gesetzt. " + s_PluginFail;
 theUILang.autotoolsFileOpType		= "Operationstyp";
 theUILang.autotoolsFileOpMove		= "Verschieben";
 theUILang.autotoolsFileOpHardLink	= "Hard link";
 theUILang.autotoolsFileOpCopy		= "Kopie";
 theUILang.autotoolsFileOpSoftLink	= "Soft link";
 theUILang.autotoolsAddLabel		= "Torrentlabel zum Pfad hinzufügen";
 theUILang.autotoolsAddName		= "Torrentnamen zum Pfad hinzufügen";
 theUILang.autotoolsEnableMove		= "Aktiviere \"AutoMove\" wenn das Label vom Torrent mit dem Filter übereinstimmt.";
 theUILang.autotoolsSkipMoveForFiles	= "Überspringe Torrents, die Dateien mit übereinstimmendem Muster enthalten.";

thePlugins.get("autotools").langLoaded();