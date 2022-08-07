SELECT name,Composer
FROM tracks;

SELECT *
FROM tracks;


SELECT DISTINCT Composer
FROM tracks ;


SELECT DISTINCT AlbumId,MediaTypeId
FROM tracks ;

SELECT name,TrackId,Composer
FROM tracks
WHERE Composer = 'Jorge Ben';

SELECT *
FROM invoices
WHERE total>25;



SELECT *
FROM invoices
WHERE total<15
LIMIT 5;


SELECT *
FROM invoices
WHERE total>10
ORDER BY total DESC
LIMIT 2; 


SELECT *
FROM invoices
WHERE NOT BillingCountry='Canada'
ORDER BY total ASC
LIMIT 10;


SELECT InvoiceId,CustomerId,total
FROM invoices
ORDER BY CustomerId ASC,total DESC;

SELECT Name 
FROM tracks
WHERE Name LIKE 'B%s';


SELECT InvoiceDate
FROM invoices
WHERE InvoiceDate BETWEEN '2008-01-01' AND 	'2011-12-31'
ORDER BY InvoiceDate DESC
LIMIT 1;


SELECT FirstName,LastName
FROM customers
WHERE country IN('Belgium','Norway');


SELECT Composer,Name
FROM tracks
WHERE Composer LIKE '%Zappa';


SELECT COUNT(*)
FROM tracks;

SELECT count(*)
FROM invoices;


SELECT COUNT(DISTINCT Composer)
FROM tracks ;

SELECT AlbumId,
COUNT(*) AS numberOfTracks
FROM tracks
GROUP BY AlbumId
ORDER BY numberOfTracks DESC;



SELECT Name,MIN(Milliseconds)
FROM tracks;



SELECT Name,MAX(Milliseconds)
FROM tracks;


SELECT*
FROM tracks
WHERE Milliseconds<(SELECT AVG(Milliseconds)
FROM tracks);


SELECT Composer,Count(Composer)
FROM tracks
GROUP BY Composer;

SELECT tracks.Name,genres.Name
FROM tracks
INNER JOIN genres
ON tracks.GenreId=genres.GenreId;

SELECT *
FROM artists
LEFT JOIN albums
ON albums.ArtistId=artists.ArtistId;


SELECT tracks.AlbumId,albums.Title,
MIN(tracks.Milliseconds) AS minDuration
FROM tracks
JOIN albums
ON tracks.AlbumId=albums.AlbumId
GROUP BY tracks.AlbumId,albums.Title
ORDER BY minDuration DESC;


SELECT albums.Title,SUM(tracks.Milliseconds) AS totalDuration
FROM tracks
JOIN albums 
ON tracks.AlbumId=albums.AlbumId
GROUP BY tracks.AlbumId
HAVING totalDuration>3600000
ORDER BY totalDuration DESC;


SELECT TrackId,NAME,AlbumId
FROM tracks
WHERE AlbumId IN( SELECT AlbumId
								FROM albums
								WHERE Title IN('Prenda Minha','Heart of the Night','Out Of Exile'));



































































