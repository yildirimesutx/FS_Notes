/*Questions:
How many tracks does each album have? Your solution should include Album id and its number of tracks sorted from highest to lowest.

Find the album title of the tracks. Your solution should include track name and its album title.

Find the minimum duration of the track in each album. Your solution should include album id, album title and duration of the track sorted from highest to lowest.

Find the total duration of each album. Your solution should include album id, album title and its total duration sorted from highest to lowest.

Based on the previous question, find the albums whose total duration is higher than 70 minutes. Your solution should include album title and total duration.*/

--1--

SELECT COUNT(DISTINCT AlbumId)
FROM tracks
ORDER BY AlbumId DESC;

SELECT AlbumId
FROM tracks
ORDER BY AlbumId DESC;

--2--

SELECT a.Title , t.name
FROM albums a
JOIN tracks t
ON a.AlbumId = t.AlbumId;

--3--

SELECT tracks.AlbumId, albums.Title, MIN(tracks.Milliseconds)
FROM tracks
JOIN albums
ON tracks.AlbumId = albums.AlbumId
GROUP BY tracks.AlbumId
ORDER BY tracks.Milliseconds DESC;


--4--

SELECT tracks.AlbumId, albums.Title, sum(tracks.Milliseconds)
FROM tracks
JOIN albums
ON tracks.AlbumId = albums.AlbumId
GROUP BY tracks.AlbumId
ORDER BY tracks.Milliseconds DESC;

--5--

SELECT tracks.AlbumId, albums.Title, sum(tracks.Milliseconds)
FROM tracks
JOIN albums
ON tracks.AlbumId = albums.AlbumId
GROUP BY tracks.AlbumId
HAVING 4200000 < sum(tracks.Milliseconds);










