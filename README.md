# adNomus Analytics SDK for Javascript

## File Contents
 * Introduction
 * Authentication
 * Content Targeting API
 * Content Relevance API
 * Content Search and Indexing API
 * Follow-up


## Introduction
adNomus Real-Time AI technologies deliver content targeting for advertising, content discovery and contextual search purposes. Our technology enables the instant and detailed matching of web/platform content to relevant 3rd party content (e.g. ads, content recommendations, search results). Our solution delivers within 1ms while guaranteeing user and content privacy. Our targeting capabilities serve web and mobile platforms and support interactive, real-time user experiences (e.g. messaging, chatbots, search).

This repository contains example use cases for our Analytics SDK for Javascript. We provide two files:
* **example_adnomus_analytics.js** presents example use cases for our SDK.
* **example_adnomus_analytics.html** is a trivial html file loading the javascript code.

Please access our sdk at:
```url
https://sdks.adnomus.com/latest/analytics/adnomus_analytics_sdk.opt.js
```

Please always use this url to access our sdk and never rely on local copies.
Our sdk is available under the **__adNomus_analytics_ns** namespace.

## Authentication

Before performing any API call, you will have to set your authentication credentials. adNomus provides you the credentials. **Please contact adNomus to receive your credentials before proceeding**.


```javascript
__adNomus_analytics_ns.set_default_authentication(network='test_network',key='fff',user=null);
```

## Content Targeting API
### Functionality
The user provides arbitrary content and we deliver
a set of descriptive terms. Those terms are either generic English terms
we generate or belong to a set of desired terms provided by the user. This
API is ideal for ad targeting (matching to keywords, categories etc) and
content characterization.

### Example Use 1 -- (generic targeting terms, no scores)
```javascript
function targeting_use_case_1() {
  var content='I am thinking to buy a new sports car, maybe a bmw or corvette.';

  function callback(response) {
    if(response[0]==true) {
      console.log('Resulted Top Terms:');
      console.log(response[1]);
    }
    else {
      console.log('request failed, reason printed on your console.');
    }
    console.log('--------------\n');
  }

  console.log('Targeting Request Use Case 1 (no scores)...');
  console.log('Input Content: '+content);
  __adNomus_analytics_ns.targeting_request(content,
                                           num_req_terms=5,
                                           user_target_terms_list=null,
                                           scores=false,
                                           callback);
}

targeting_use_case_1();
```

### Example Use 2 -- (generic targeting terms, with scores)
```javascript
function targeting_use_case_2() {
  var content='I am thinking to buy a new sports car, maybe a bmw or corvette.';

  function callback(response) {
    if(response[0]==true) {
      console.log('Resulted Top Terms:');
      console.log(response[1]);
      console.log('Scores:');
      console.log(response[2]);
    }
    else {
      console.log('request failed, reason printed on your console.');
    }
    console.log('--------------\n');
  }

  console.log('Targeting Request Use Case 2 (with scores)...');
  console.log('Input Content: '+content);
  __adNomus_analytics_ns.targeting_request(content,
                                           num_req_terms=5,
                                           user_target_terms_list=null,
                                           scores=true,
                                           callback);
}

targeting_use_case_2();
```

### Example Use 3 -- (user defined targeting terms, no scores)
```javascript
function targeting_use_case_3() {
  var content='I am thinking to buy a new sports car, maybe a bmw or corvette.';

  var user_target_terms=['car','bmw','race','speed',
                         'auto-motive','dealership',
                         'art','physics','camping'];

  function callback(response) {
    if(response[0]==true) {
      console.log('Resulted Top Terms:');
      console.log(response[1]);
    }
    else {
      console.log('request failed, reason printed on your console.');
    }
    console.log('--------------\n');
  }

  console.log('Targeting Request Use Case 3 (USER DEFINED targeting terms + no scores)...');
  console.log('Input Content: '+content);
  __adNomus_analytics_ns.targeting_request(content,
                                           num_req_terms=8,
                                           user_target_terms_list=user_target_terms,
                                           scores=false,
                                           callback);
}

targeting_use_case_3();
```

### Example Use 4 -- (user defined targeting terms, with scores)
```javascript
function targeting_use_case_4() {
  var content='I am thinking to buy a new sports car, maybe a bmw or corvette.';

  var user_target_terms=['car','bmw','race','speed',
                         'auto-motive','dealership',
                         'art','physics','camping'];

  function callback(response) {
    if(response[0]==true) {
      console.log('Resulted Top Terms:');
      console.log(response[1]);
      console.log('Scores:');
      console.log(response[2]);
    }
    else {
      console.log('request failed, reason printed on your console.');
    }
    console.log('--------------\n');
  }

  console.log('Targeting Request Use Case 4 (USER DEFINED targeting terms + with scores)...');
  console.log('Input Content: '+content);
  __adNomus_analytics_ns.targeting_request(content,
                                           num_req_terms=8,
                                           user_target_terms_list=user_target_terms,
                                           scores=true,
                                           callback);
}

targeting_use_case_4();
```

### Interesting Use Cases
**Contextual Ad Targeting:** Use the API to retrieve terms(keywords) that
characterize your content. You can rely on us to provide generic terms
or you can explicitly define the terms you are interested into and we
do the targeting.

**Content Characterization**: Retrieve terms that describe your content,
again you have the option to specify the set of terms we target.

**Content Classification:** Use this API to classify your content to
categories of your choice. Here, you can specify any category you require
in plain English e.g. "cars", "Italian food", "computer security news". A
category can be a single word or a phrase.


## Content Relevance API
### Functionality
The user provides a reference content and a set of
extrinsic (e.g. external/third party) contents. We deliver contextual
ordering (e.g. Extrinsic content A is more relevant to the Reference
Content than extrinsic content B). This API is ideal for content
recommendation and service discovery.

### Example Use 1 -- (relevance ordering, no scores)
```javascript
function relevance_use_case_1() {
  var content0='I like travelling to the mountains and doing camping.';
  var content1='New BMW and AUDI cars are amazing cars but American models like Camaro set the competition bar high.';
  var content2='I am thinking of buying a car or a motorbike for racing.';
  var content3='Pop music releases of the last years are pretty mediocre productions.';
  var content_dict={};
  content_dict['c0']=content0;
  content_dict['c1']=content1;
  content_dict['c2']=content2;
  content_dict['c3']=content3;

  var reference_content='I am thinking to buy a new sports car, maybe a bmw or corvette.';

  function callback(response) {
    if(response[0]==true) {
      console.log('Relevance Ordering (High to Low):');
      console.log(response[1]);
    }
    else {
      console.log('request failed, reason printed on your console.');
    }
    console.log('--------------\n');
  }

  console.log('Relevance Request Use Case 1 (no scores)...');
  console.log('Reference Content: '+reference_content);
  console.log('Extrinsic Contents: ');
  console.log('\tc0: '+content0);
  console.log('\tc1: '+content1);
  console.log('\tc2: '+content2);
  console.log('\tc3: '+content3);

  __adNomus_analytics_ns.relevance_request(reference_content=reference_content,
                                           extrinsic_content_dict=content_dict,
                                           scores=false,
                                           callback);

}

relevance_use_case_1();
```

### Example Use 2 -- (relevance ordering, with scores)
```javascript
function relevance_use_case_2() {
  var content0='I like travelling to the mountains and doing camping.';
  var content1='New BMW and AUDI cars are amazing cars but American models like Camaro set the competition bar high.';
  var content2='I am thinking of buying a car or a motorbike for racing.';
  var content3='Pop music releases of the last years are pretty mediocre productions.';
  var content_dict={};
  content_dict['c0']=content0;
  content_dict['c1']=content1;
  content_dict['c2']=content2;
  content_dict['c3']=content3;

  var reference_content='I am thinking to buy a new sports car, maybe a bmw or corvette.';

  function callback(response) {
    if(response[0]==true) {
      console.log('Relevance Ordering (High to Low):');
      console.log(response[1]);
      console.log('Scores:');
      console.log(response[2]);
    }
    else {
      console.log('request failed, reason printed on your console.');
    }
    console.log('--------------\n');
  }

  console.log('Relevance Request Use Case 2 (with scores)...');
  console.log('Reference Content: '+reference_content);
  console.log('Extrinsic Contents: ');
  console.log('\tc0: '+content0);
  console.log('\tc1: '+content1);
  console.log('\tc2: '+content2);
  console.log('\tc3: '+content3);

  __adNomus_analytics_ns.relevance_request(reference_content=reference_content,
                                           extrinsic_content_dict=content_dict,
                                           scores=true,
                                           callback);

}

relevance_use_case_2();
```

### Interesting Use Cases
**Content Recommendation:** There are multiple use cases (e.g. social
media) where you need to recommend relevant content to your user (show
her something relevant to what she is reading or writing). This API
allows you to do that.

**Service Recommendation:** In many scenarios, you need to suggest your
user some actions such as i) listen to a song, ii) buy a concert ticket,
iii) take care of some task. The best way to do this is by naturally
connecting those actions to the content the user reads or writes.
Please, consider the following approach: The reference content here
is your user's content and the extrinsic contents the actions you want
to recommend, described in plain English e.g. "listen to the new Metallica
song", "get a ticket to Mexico for vacation".


## Content Search and Indexing API
### Functionality
Content Search and Indexing API: The user provides an inventory description
(e.g. marketplace/content items). We generate a contextual indexing and allow
the user to search their inventory in natural language. This is NLP driven
search that goes beyond naive keyword matching and typical pattern
matching found in standard search engines.


### Example Use 1 -- (search, no scores)
```javascript
function search_use_case_1() {
  var inventory0='$100 Giftcard, buy your favorite clothing online.';
  var inventory1='This car tuner accessory gives your car additional velocity and smooth suspension.';
  var inventory2='New phone device allows you to surf the internet with voice commands.';
  var inventory3='The ultimate travelling guide for Africa, Europe and Asia.';
  var inventory4='AUDI and BMW lease voucher, save 5k for your next car.';
  var inventory_dict={};
  inventory_dict['entry0']=inventory0;
  inventory_dict['entry1']=inventory1;
  inventory_dict['entry2']=inventory2;
  inventory_dict['entry3']=inventory3;
  inventory_dict['entry4']=inventory4;

  var query='I am looking for car related products';

  console.log('Search Request Use Case 1 (no scores)...');
  console.log('Search Query: '+query);
  console.log('Inventory Entries: ');
  console.log('\tentry0: '+inventory0);
  console.log('\tentry1: '+inventory1);
  console.log('\tentry2: '+inventory2);
  console.log('\tentry3: '+inventory3);
  console.log('\tentry4: '+inventory4);

  function callback(response) {
    if(response[0]==true) {
      console.log('Top Results: ');
      console.log(response[1]);
    }
    else {
      console.log('request failed, reason printed on your console.');
    }
    console.log('--------------\n');
  }

  __adNomus_analytics_ns.search_request(query=query,
                                        inventory_entries_dict=inventory_dict,
                                        num_req_results=3,
                                        scores=false,
                                        callback);
}

search_use_case_1();
```

### Example Use 2 -- (search, with scores)
```javascript
function search_use_case_2() {
  var inventory0='$100 Giftcard, buy your favorite clothing online.';
  var inventory1='This car tuner accessory gives your car additional velocity and smooth suspension.';
  var inventory2='New phone device allows you to surf the internet with voice commands.';
  var inventory3='The ultimate travelling guide for Africa, Europe and Asia.';
  var inventory4='AUDI and BMW lease voucher, save 5k for your next car.';
  var inventory_dict={};
  inventory_dict['entry0']=inventory0;
  inventory_dict['entry1']=inventory1;
  inventory_dict['entry2']=inventory2;
  inventory_dict['entry3']=inventory3;
  inventory_dict['entry4']=inventory4;

  var query='I am looking for car related products';

  console.log('Search Request Use Case 2 (with scores)...');
  console.log('Search Query: '+query);
  console.log('Inventory Entries: ');
  console.log('\tentry0: '+inventory0);
  console.log('\tentry1: '+inventory1);
  console.log('\tentry2: '+inventory2);
  console.log('\tentry3: '+inventory3);
  console.log('\tentry4: '+inventory4);

  function callback(response) {
    if(response[0]==true) {
      console.log('Top Results: ');
      console.log(response[1]);
      console.log('Scores:');
      console.log(response[2]);
    }
    else {
      console.log('request failed, reason printed on your console.');
    }
    console.log('--------------\n');
  }

  __adNomus_analytics_ns.search_request(query=query,
                                        inventory_entries_dict=inventory_dict,
                                        num_req_results=3,
                                        scores=true,
                                        callback);
}

search_use_case_2();
```

### Interesting Use Cases
**Precise Content Search:** You can use this API to perform contextual
search on your content inventory (e.g. social media content). Our
search technology goes beyond keyword and pattern matching and delivers
high quality results.

**Marketplace Inventory Indexing and Search:** Modern marketplaces
have hundreds of millions of product entries. Traditional search
technologies fail in scaling and precision. This API fixes this.

**Contextual Indexing and Search of Ad Inventories:** Use this API
to contextually organize and search your advert inventory. We provide
you a solution for effective ad targeting and indexing.


## Follow-up
### Register with us
Register with us to receive your credentials and start using our service.

### In-house Solutions
Your service needs may require the transfer of terabytes
of data in daily base and you may require the caching of your API requests. We can
install, configure and support our services and technologies as part of your in-house
infrastructure or cloud.

### Contact information
Visit our [website](http://www.adnomus.com).
Email us at: contact@adnomus.com
