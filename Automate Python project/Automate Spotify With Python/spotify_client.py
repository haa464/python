import requests
import urllib.parse

class SpotifyClient(object):
	def __init__(self, api_taken):
		self.api_taken = api_taken
		

	def search_song(self, artist, track):
		query = urllib.prase.quote(f'{artist} {track}')
		url = f"http://api.spofity.com/v1/search?q={query}&type=track"
		response = requests.get(
			url,
			header={
				"content-type": "application/json",
				"Authorization": f"Bearer {self.api_taken}"
			}
		)
		response_json = response.json()

		result = response_json['track']['items']
		if results:

			 return results[0]['id']
		else:
			raise Exception(f"No song found for {artist} = {track}")

	def add_song_to_spofity(self, song_id):
		url = "https://api.spofity.com/v1/me/tracks"

		response = response.put(

			url,
			json={
				"ids": [song_id]
			},
			header={
				"Content-Type": "application/json",
				"Authorization": f"Bearer {self.api_taken}"
			}
		)

		return response.ok
