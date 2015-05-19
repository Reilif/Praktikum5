#Praktikum 5


##Aufgabe 3
<kbd>REST API </kbd><kbd>HTTP Verb</kbd>
<kbd>Parameter</kbd>
<kbd>Beschreibung </kbd>
<br>



<kbd>Get folders </kbd><kbd> GET </kbd><kbd> kein </kbd><kbd> Ermittelt alle existierenden Folder </kbd><br>
<kbd>Get folder messages </kbd><kbd> GET </kbd><kbd> Folder-ID </kbd><kbd> Ermittelt alle Nachrichten eines Folders </kbd><br>
|Delete folder | DELETE | Folder-ID | Löscht einen existierenden Folder mit allen Nachrichten |
|Update folder name | PUT | Folder-ID, newValue | Aktualisiert den Namen eines Folders |
|Read message | GET | MSG-ID| Liest die Detailinformationen einer einzelnen Nachricht |
|Delete message | DELETE | MSG-ID | Löscht eine einzelne Nachricht |
|Create message | POST | sender, empfänger, nachricht, betreff | Erzeugt eine neue einzelne Nachricht |
|Update message | PUT | msg-id, newValue | Verschiebt eine Nachricht von einem Folder in einen anderen |
