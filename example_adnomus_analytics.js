// Copyright 2017 adNomus Inc. All rights reserved.

demo_tasks=[];

function run_next_task() {
  var task=demo_tasks.shift();
  if (task!=undefined) {
    task();
  }
  else {
    console.log('the demo has been completed.');
  }
}

function add_task_to_run(task) {
  demo_tasks.push(task);
}

//need to set authentication credentials before using the sdk.
__adNomus_analytics_ns.set_default_authentication(network='test_network',key='fff',user=null);


//targeting api test
function targeting_message() {
  console.log('===============---- Content Targeting API ----==============\n'+
  'Content Targeting API: The user provides arbitrary content and we deliver '+
  'a set of descriptive terms. Those terms are either generic English terms '+
  'we generate or belong to a set of desired terms provided by the user. This '+
  'API is ideal for ad targeting (matching to keywords, categories etc) and '+
  'content characterization.\n');
  run_next_task();
}

add_task_to_run(targeting_message);

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
    run_next_task();
  }

  console.log('Targeting Request Use Case 1 (no scores)...');
  console.log('Input Content: '+content);
  __adNomus_analytics_ns.targeting_request(content,
                                           num_req_terms=5,
                                           user_target_terms_list=null,
                                           scores=false,
                                           callback);
}

add_task_to_run(targeting_use_case_1);

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
    run_next_task();
  }

  console.log('Targeting Request Use Case 2 (with scores)...');
  console.log('Input Content: '+content);
  __adNomus_analytics_ns.targeting_request(content,
                                           num_req_terms=5,
                                           user_target_terms_list=null,
                                           scores=true,
                                           callback);
}

add_task_to_run(targeting_use_case_2);

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
    run_next_task();
  }

  console.log('Targeting Request Use Case 3 (USER DEFINED targeting terms + no scores)...');
  console.log('Input Content: '+content);
  __adNomus_analytics_ns.targeting_request(content,
                                           num_req_terms=8,
                                           user_target_terms_list=user_target_terms,
                                           scores=false,
                                           callback);
}

add_task_to_run(targeting_use_case_3);


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
    run_next_task();
  }

  console.log('Targeting Request Use Case 4 (USER DEFINED targeting terms + with scores)...');
  console.log('Input Content: '+content);
  __adNomus_analytics_ns.targeting_request(content,
                                           num_req_terms=8,
                                           user_target_terms_list=user_target_terms,
                                           scores=true,
                                           callback);
}

add_task_to_run(targeting_use_case_4);



//relevance api test
function relevance_message() {
  console.log('===============---- Content Relevance API ----===============\n'+
  'Content Relevance API: The user provides a reference content and a set of '+
  'extrinsic (e.g. external/third party) contents. We deliver contextual '+
  'ordering (e.g. Extrinsic content A is more relevant to the Reference '+
  'Content than extrinsic content B). This API is ideal for content '+
  'recommendation and service discovery.\n');
  run_next_task();
}

add_task_to_run(relevance_message);

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
    run_next_task();
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

add_task_to_run(relevance_use_case_1);

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
    run_next_task();
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

add_task_to_run(relevance_use_case_2);




//search api test

function search_message() {
  console.log('===============---- Content Search and Indexing API ----===============\n'+
  'Content Search and Indexing API: The user provides an inventory description '+
  'e.g. marketplace/content items). We generate a contextual indexing and allow '+
  'the user to search their inventory in natural language. This is NLP driven '+
  'search that goes beyond naive keyword matching and typical pattern '+
  'matching found in standard search engines.\n');
  run_next_task();
}

add_task_to_run(search_message);

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
    run_next_task();
  }

  __adNomus_analytics_ns.search_request(query=query,
                                        inventory_entries_dict=inventory_dict,
			                num_req_results=3,
                                        scores=false,
                                        callback);
}

add_task_to_run(search_use_case_1);

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
    run_next_task();
  }

  __adNomus_analytics_ns.search_request(query=query,
                                        inventory_entries_dict=inventory_dict,
			                num_req_results=3,
                                        scores=true,
                                        callback);
}

add_task_to_run(search_use_case_2);


function contact_message() {
  console.log('=====================---- More Info ----======================\n'+
  'In-house solutions: Your service needs may require the transfer of terabytes '+
  'of data in daily base and you may require the caching of your API requests. We can '+
  'install, configure and support our services and technologies as part of your in-house '+
  'infrastructure or cloud.');

  console.log('Contact us at: contact@adnomus.com');
}

add_task_to_run(contact_message);

run_next_task();
