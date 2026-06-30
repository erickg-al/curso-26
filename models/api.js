function apitest(response) {
  if (response == 200) {
    return "check";
  }
  return "erro";
}

exports.apitest = apitest;
