--SELECT
SELECT name FROM tracks ;

/* track tablsoundaki besteci şarkı isimleri */

SELECT Composer, name FROM tracks;

/* track tablsoundaki tüm bilgiler */

SELECT *FROM tracks;

--DISTINCT, tekrar eden özellikleri atlar

SELECT DISTINCT Composer FROM tracks;

SELECT  AlbumId, MediaTypeId FROM tracks;

SELECT name FROM tracks WHERE Composer="Jimi Hendrix" ;

SELECT *FROM invoices WHERE total>10 ;