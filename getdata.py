from requests import get
from bs4 import BeautifulSoup
from pprint import pprint


def get_data(word):
    url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
    response = get(url)
    data = response.json()
    parts_of_speech = ["noun", "verb", "adjective", "pronoun", "adverb", "preposition", "conjunction", "interjection"]
    modified_data = {part_of_speech: [] for part_of_speech in parts_of_speech}
    for part_of_speech in parts_of_speech:
        lst = []
        for num in range(len(data)):
            for sub_data in data[num]["meanings"]:
                if part_of_speech == sub_data["partOfSpeech"]:
                    for dictionary in sub_data["definitions"]:
                        if "definition" in dictionary and "example" in dictionary:
                            dict_data = {"definition": dictionary["definition"], "example": dictionary["example"]}
                            lst.append(dict_data)
                        else:
                            dict_data = {"definition": dictionary["definition"]}
                            lst.append(dict_data)

                    lst.extend(modified_data[part_of_speech])
                    modified_data[part_of_speech] = lst
    return modified_data


def get_synonym_antonym(word):
    url = f"https://www.merriam-webster.com/thesaurus/{word}"
    response = get(url)
    html_string = response.text

    soup = BeautifulSoup(html_string, "html.parser")
    synonyms = [span_tag.text for span_tag in soup.select(".sim-list-scored .syl")]
    antonyms = [span_tag.text for span_tag in soup.select(".opp-list-scored .syl")]
    synonyms_antonyms = {"synonyms": list(set(synonyms)), "antonyms": list(set(antonyms))}
    return synonyms_antonyms

# Test Code
# get_synonym_antonym("kind")

