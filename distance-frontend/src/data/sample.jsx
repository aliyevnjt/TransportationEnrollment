const sample = [
  {
    fname: 'Todd',
    lname: 'Phillips',
    grade: 2,
    birthDate: '02/26/2014',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '8 MASSASOIT TL',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Helen Phillips',
    parentEmailAddress: 'hphillips@yahoo.com',
    parentPhoneNumber: '7818300530',
    unit: '',
    mname: '',
  },
  {
    fname: 'Phyllis',
    lname: 'Jenkins',
    grade: 2,
    birthDate: '06/04/2014',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '147 SPECTACLE POND RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Edward Jenkins',
    parentEmailAddress: 'ejenkins@aol.com',
    parentPhoneNumber: '8575738284',
    unit: '',
    mname: '',
  },
  {
    fname: 'Helen',
    lname: 'Washington',
    grade: 9,
    birthDate: '04/20/2007',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '15 GREEN NEEDLES RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Nancy Washington',
    parentEmailAddress: 'nwashington@verizon.com',
    parentPhoneNumber: '8574944253',
    unit: '',
    mname: '',
  },
  {
    fname: 'Lawrence',
    lname: 'Wood',
    grade: 12,
    birthDate: '06/15/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '203 HARVARD RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Russell Wood',
    parentEmailAddress: 'rwood@hotmail.com',
    parentPhoneNumber: '7814109347',
    unit: '',
    mname: '',
  },
  {
    fname: 'Ruth',
    lname: 'Smith',
    grade: 7,
    birthDate: '01/13/2009',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '40 LONGFELLOW DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Patrick Smith',
    parentEmailAddress: 'psmith@aol.com',
    parentPhoneNumber: '3096888269',
    unit: '',
    mname: '',
  },
  {
    fname: 'Louise',
    lname: 'Wilson',
    grade: 3,
    birthDate: '04/08/2013',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '47 GOLDSMITH ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Cheryl Wilson',
    parentEmailAddress: 'cwilson@yahoo.com',
    parentPhoneNumber: '3095849790',
    unit: '',
    mname: '',
  },
  {
    fname: 'Jessica',
    lname: 'Ward',
    grade: 'K',
    birthDate: '08/12/2016',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '254 AYER RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Sarah Ward',
    parentEmailAddress: 'sward@gmail.com',
    parentPhoneNumber: '6178314886',
    unit: '',
    mname: '',
  },
  {
    fname: 'Adam',
    lname: 'Bryant',
    grade: 2,
    birthDate: '05/10/2014',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '123 HARVARD RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Scott Bryant',
    parentEmailAddress: 'sbryant@gmail.com',
    parentPhoneNumber: '5087159346',
    unit: '',
    mname: '',
  },
  {
    fname: 'Dorothy',
    lname: 'Allen',
    grade: 5,
    birthDate: '02/04/2011',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '160 AYER RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Raymond Allen',
    parentEmailAddress: 'rallen@comcast.com',
    parentPhoneNumber: '3097768870',
    unit: '',
    mname: '',
  },
  {
    fname: 'Cynthia',
    lname: 'Adams',
    grade: 1,
    birthDate: '07/15/2015',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '28 MIDDLESEX DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Lawrence Adams',
    parentEmailAddress: 'ladams@gmail.com',
    parentPhoneNumber: '6173987551',
    unit: '',
    mname: '',
  },
  {
    fname: 'Anna',
    lname: 'Foster',
    grade: 2,
    birthDate: '01/25/2014',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '29 SURREY RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Angela Foster',
    parentEmailAddress: 'afoster@aol.com',
    parentPhoneNumber: '5089973241',
    unit: '',
    mname: '',
  },
  {
    fname: 'Tammy',
    lname: 'Cooper',
    grade: 'K',
    birthDate: '07/05/2016',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '31 FORT POND HILL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Roy Cooper',
    parentEmailAddress: 'rcooper@verizon.com',
    parentPhoneNumber: '7818678698',
    unit: '',
    mname: '',
  },
  {
    fname: 'Anne',
    lname: 'Rodriguez',
    grade: 8,
    birthDate: '05/15/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '9 DEER RUN RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Sara Rodriguez',
    parentEmailAddress: 'srodriguez@hotmail.com',
    parentPhoneNumber: '8573571121',
    unit: '',
    mname: '',
  },
  {
    fname: 'Eric',
    lname: 'Brooks',
    grade: 6,
    birthDate: '08/09/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '50 RUSSELL ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Ashley Brooks',
    parentEmailAddress: 'abrooks@comcast.com',
    parentPhoneNumber: '3094370020',
    unit: '',
    mname: '',
  },
  {
    fname: 'Gary',
    lname: 'Price',
    grade: 12,
    birthDate: '06/11/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '14 LAURA ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Barbara Price',
    parentEmailAddress: 'bprice@hotmail.com',
    parentPhoneNumber: '5085116849',
    unit: '',
    mname: '',
  },
  {
    fname: 'Edward',
    lname: 'Ramirez',
    grade: 9,
    birthDate: '02/11/2007',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '19 FOSTER ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Frances Ramirez',
    parentEmailAddress: 'framirez@gmail.com',
    parentPhoneNumber: '6178137173',
    unit: '',
    mname: '',
  },
  {
    fname: 'Carl',
    lname: 'Wright',
    grade: 'K',
    birthDate: '01/14/2016',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '75 HARVARD RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Mary Wright',
    parentEmailAddress: 'mwright@comcast.com',
    parentPhoneNumber: '5083886911',
    unit: '',
    mname: '',
  },
  {
    fname: 'Debra',
    lname: 'Turner',
    grade: 11,
    birthDate: '07/18/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '220 HARWOOD AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Donald Turner',
    parentEmailAddress: 'dturner@verizon.com',
    parentPhoneNumber: '7818378331',
    unit: '',
    mname: '',
  },
  {
    fname: 'Willie',
    lname: 'Jones',
    grade: 8,
    birthDate: '02/05/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '44 EDSEL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Carl Jones',
    parentEmailAddress: 'cjones@aol.com',
    parentPhoneNumber: '7817505766',
    unit: '',
    mname: '',
  },
  {
    fname: 'Brenda',
    lname: 'Parker',
    grade: 7,
    birthDate: '01/27/2009',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '288 KING ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Beverly Parker',
    parentEmailAddress: 'bparker@aol.com',
    parentPhoneNumber: '8577847535',
    unit: '',
    mname: '',
  },
  {
    fname: 'Sarah',
    lname: 'Anderson',
    grade: 11,
    birthDate: '08/18/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '84 GRIST MILL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Anna Anderson',
    parentEmailAddress: 'aanderson@hotmail.com',
    parentPhoneNumber: '6177973323',
    unit: '',
    mname: '',
  },
  {
    fname: 'Christopher',
    lname: 'Thomas',
    grade: 'K',
    birthDate: '02/01/2016',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '33 LAKE SHORE DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Christopher Thomas',
    parentEmailAddress: 'cthomas@hotmail.com',
    parentPhoneNumber: '8578049494',
    unit: '',
    mname: '',
  },
  {
    fname: 'Mary',
    lname: 'Martinez',
    grade: 10,
    birthDate: '01/23/2006',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '77 GRIST MILL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Sandra Martinez',
    parentEmailAddress: 'smartinez@hotmail.com',
    parentPhoneNumber: '7813149777',
    unit: '',
    mname: '',
  },
  {
    fname: 'Ashley',
    lname: 'Harris',
    grade: 6,
    birthDate: '08/05/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '3 BARON WY',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Ruby Harris',
    parentEmailAddress: 'rharris@aol.com',
    parentPhoneNumber: '3097391800',
    unit: '',
    mname: '',
  },
  {
    fname: 'Steve',
    lname: 'Torres',
    grade: 7,
    birthDate: '04/15/2009',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '10 DEER RUN RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Heather Torres',
    parentEmailAddress: 'htorres@comcast.com',
    parentPhoneNumber: '8579959535',
    unit: '',
    mname: '',
  },
  {
    fname: 'Billy',
    lname: 'Nelson',
    grade: 1,
    birthDate: '06/25/2015',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '3 PARK DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Kevin Nelson',
    parentEmailAddress: 'knelson@yahoo.com',
    parentPhoneNumber: '6175866409',
    unit: '',
    mname: '',
  },
  {
    fname: 'Randy',
    lname: 'Lopez',
    grade: 9,
    birthDate: '01/01/2007',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '5 REED LN',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Lois Lopez',
    parentEmailAddress: 'llopez@gmail.com',
    parentPhoneNumber: '6179639282',
    unit: '',
    mname: '',
  },
  {
    fname: 'Lori',
    lname: 'Thompson',
    grade: 10,
    birthDate: '07/07/2006',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '75 NASHOBA RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Terry Thompson',
    parentEmailAddress: 'tthompson@comcast.com',
    parentPhoneNumber: '6179010394',
    unit: '',
    mname: '',
  },
  {
    fname: 'Doris',
    lname: 'Henderson',
    grade: 8,
    birthDate: '02/06/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '15 POWERS RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Thomas Henderson',
    parentEmailAddress: 'thenderson@gmail.com',
    parentPhoneNumber: '6179625672',
    unit: '',
    mname: '',
  },
  {
    fname: 'Rachel',
    lname: 'Gonzales',
    grade: 7,
    birthDate: '02/27/2009',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '20 OAK HILL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Marilyn Gonzales',
    parentEmailAddress: 'mgonzales@yahoo.com',
    parentPhoneNumber: '7816366241',
    unit: '',
    mname: '',
  },
  {
    fname: 'Chris',
    lname: 'Powell',
    grade: 8,
    birthDate: '02/22/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '20 VALLEY DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Joe Powell',
    parentEmailAddress: 'jpowell@verizon.com',
    parentPhoneNumber: '3099695776',
    unit: '',
    mname: '',
  },
  {
    fname: 'Raymond',
    lname: 'Butler',
    grade: 4,
    birthDate: '08/25/2012',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '193 FOSTER ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jennifer Butler',
    parentEmailAddress: 'jbutler@comcast.com',
    parentPhoneNumber: '3096554487',
    unit: '',
    mname: '',
  },
  {
    fname: 'Heather',
    lname: 'Walker',
    grade: 12,
    birthDate: '07/13/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '168 TAHATTAWAN RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Sharon Walker',
    parentEmailAddress: 'swalker@hotmail.com',
    parentPhoneNumber: '5083688264',
    unit: '',
    mname: '',
  },
  {
    fname: 'Virginia',
    lname: 'Lee',
    grade: 8,
    birthDate: '04/03/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '171 WHITCOMB AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Earl Lee',
    parentEmailAddress: 'elee@aol.com',
    parentPhoneNumber: '3099126152',
    unit: '',
    mname: '',
  },
  {
    fname: 'Jane',
    lname: 'Carter',
    grade: 6,
    birthDate: '04/03/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '4 DELANEY DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jason Carter',
    parentEmailAddress: 'jcarter@yahoo.com',
    parentPhoneNumber: '7817465313',
    unit: '',
    mname: '',
  },
  {
    fname: 'Harry',
    lname: 'Murphy',
    grade: 11,
    birthDate: '02/03/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '118 SPECTACLE POND RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Julia Murphy',
    parentEmailAddress: 'jmurphy@hotmail.com',
    parentPhoneNumber: '5087169273',
    unit: '',
    mname: '',
  },
  {
    fname: 'Gregory',
    lname: 'Hughes',
    grade: 2,
    birthDate: '07/26/2014',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '18 DEER RUN RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Henry Hughes',
    parentEmailAddress: 'hhughes@comcast.com',
    parentPhoneNumber: '5089094440',
    unit: '',
    mname: '',
  },
  {
    fname: 'Roger',
    lname: 'Stewart',
    grade: 11,
    birthDate: '06/12/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '47 TAYLOR ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Cynthia Stewart',
    parentEmailAddress: 'cstewart@aol.com',
    parentPhoneNumber: '6174672945',
    unit: '',
    mname: '',
  },
  {
    fname: 'Janice',
    lname: 'Garcia',
    grade: 5,
    birthDate: '07/05/2011',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '51 GILSON RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Ernest Garcia',
    parentEmailAddress: 'egarcia@comcast.com',
    parentPhoneNumber: '8579745859',
    unit: '',
    mname: '',
  },
  {
    fname: 'Christine',
    lname: 'Patterson',
    grade: 11,
    birthDate: '03/04/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '616 GREAT RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Teresa Patterson',
    parentEmailAddress: 'tpatterson@aol.com',
    parentPhoneNumber: '5089753463',
    unit: '',
    mname: '',
  },
  {
    fname: 'Justin',
    lname: 'Russell',
    grade: 3,
    birthDate: '07/11/2013',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '17 TAYLOR ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jessica Russell',
    parentEmailAddress: 'jrussell@hotmail.com',
    parentPhoneNumber: '7817354540',
    unit: '',
    mname: '',
  },
  {
    fname: 'Beverly',
    lname: 'Simmons',
    grade: 6,
    birthDate: '02/10/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '23 FORT POND HILL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Ralph Simmons',
    parentEmailAddress: 'rsimmons@verizon.com',
    parentPhoneNumber: '3096610615',
    unit: '',
    mname: '',
  },
  {
    fname: 'Thomas',
    lname: 'Sanders',
    grade: 11,
    birthDate: '03/07/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '100 FOSTER ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Daniel Sanders',
    parentEmailAddress: 'dsanders@comcast.com',
    parentPhoneNumber: '7815126931',
    unit: '',
    mname: '',
  },
  {
    fname: 'Ruby',
    lname: 'Griffin',
    grade: 5,
    birthDate: '05/15/2011',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '4 OAK HILL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Bobby Griffin',
    parentEmailAddress: 'bgriffin@verizon.com',
    parentPhoneNumber: '6178037788',
    unit: '',
    mname: '',
  },
  {
    fname: 'Alice',
    lname: 'Jackson',
    grade: 10,
    birthDate: '03/26/2006',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '465 NEWTOWN RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Gloria Jackson',
    parentEmailAddress: 'gjackson@gmail.com',
    parentPhoneNumber: '8577080251',
    unit: '',
    mname: '',
  },
  {
    fname: 'Bruce',
    lname: 'Campbell',
    grade: 4,
    birthDate: '01/17/2012',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '3 BARON WY',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Patricia Campbell',
    parentEmailAddress: 'pcampbell@hotmail.com',
    parentPhoneNumber: '8575727347',
    unit: '',
    mname: '',
  },
  {
    fname: 'Louis',
    lname: 'Davis',
    grade: 'K',
    birthDate: '06/06/2016',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '4 SPARTAN ARROW',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Margaret Davis',
    parentEmailAddress: 'mdavis@gmail.com',
    parentPhoneNumber: '3098417411',
    unit: '',
    mname: '',
  },
  {
    fname: 'Kathleen',
    lname: 'James',
    grade: 8,
    birthDate: '06/08/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '7 DELANEY DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Susan James',
    parentEmailAddress: 'sjames@verizon.com',
    parentPhoneNumber: '3095822747',
    unit: '',
    mname: '',
  },
  {
    fname: 'Donald',
    lname: 'Cox',
    grade: 6,
    birthDate: '04/03/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '31 SPRINGFIELD DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Lillian Cox',
    parentEmailAddress: 'lcox@hotmail.com',
    parentPhoneNumber: '3095442958',
    unit: '',
    mname: '',
  },
  {
    fname: 'Lois',
    lname: 'Ross',
    grade: 12,
    birthDate: '03/15/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '160 TAHATTAWAN RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Ryan Ross',
    parentEmailAddress: 'rross@verizon.com',
    parentPhoneNumber: '5082630983',
    unit: '',
    mname: '',
  },
  {
    fname: 'Joe',
    lname: 'Miller',
    grade: 12,
    birthDate: '05/22/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '526 GREAT RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Tina Miller',
    parentEmailAddress: 'tmiller@verizon.com',
    parentPhoneNumber: '3098034954',
    unit: '',
    mname: '',
  },
  {
    fname: 'Catherine',
    lname: 'Bennett',
    grade: 10,
    birthDate: '07/27/2006',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '18 BEAVER BROOK RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Todd Bennett',
    parentEmailAddress: 'tbennett@verizon.com',
    parentPhoneNumber: '7813903416',
    unit: '',
    mname: '',
  },
  {
    fname: 'Kevin',
    lname: 'White',
    grade: 11,
    birthDate: '03/01/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '218 HARTWELL AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Brian White',
    parentEmailAddress: 'bwhite@comcast.com',
    parentPhoneNumber: '3094634421',
    unit: '',
    mname: '',
  },
  {
    fname: 'Maria',
    lname: 'Hill',
    grade: 8,
    birthDate: '06/22/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '158 WHITCOMB AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jose Hill',
    parentEmailAddress: 'jhill@gmail.com',
    parentPhoneNumber: '5088409474',
    unit: '',
    mname: '',
  },
  {
    fname: 'Diana',
    lname: 'Alexander',
    grade: 'K',
    birthDate: '08/19/2016',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '20 PORTER RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Timothy Alexander',
    parentEmailAddress: 'talexander@gmail.com',
    parentPhoneNumber: '5086987861',
    unit: '',
    mname: '',
  },
  {
    fname: 'Irene',
    lname: 'Reed',
    grade: 6,
    birthDate: '02/02/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '95 WHITCOMB AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Debra Reed',
    parentEmailAddress: 'dreed@verizon.com',
    parentPhoneNumber: '5089716559',
    unit: '',
    mname: '',
  },
  {
    fname: 'James',
    lname: 'Richardson',
    grade: 8,
    birthDate: '07/05/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '7 DROVER LN',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Michael Richardson',
    parentEmailAddress: 'mrichardson@gmail.com',
    parentPhoneNumber: '8579709459',
    unit: '',
    mname: '',
  },
  {
    fname: 'Larry',
    lname: 'Baker',
    grade: 7,
    birthDate: '04/03/2009',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '35 MOORE LN',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Theresa Baker',
    parentEmailAddress: 'tbaker@aol.com',
    parentPhoneNumber: '5089260347',
    unit: '',
    mname: '',
  },
  {
    fname: 'Jason',
    lname: 'Martin',
    grade: 6,
    birthDate: '05/13/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: 'OFF BULKELEY RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Carolyn Martin',
    parentEmailAddress: 'cmartin@verizon.com',
    parentPhoneNumber: '5086327846',
    unit: '',
    mname: '',
  },
  {
    fname: 'Kenneth',
    lname: 'King',
    grade: 8,
    birthDate: '06/20/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '26 ORCHID DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Willie King',
    parentEmailAddress: 'wking@comcast.com',
    parentPhoneNumber: '6173092828',
    unit: '',
    mname: '',
  },
  {
    fname: 'Julia',
    lname: 'Gonzalez',
    grade: 2,
    birthDate: '06/02/2014',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '149 WHITCOMB AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Brandon Gonzalez',
    parentEmailAddress: 'bgonzalez@gmail.com',
    parentPhoneNumber: '7813287759',
    unit: '',
    mname: '',
  },
  {
    fname: 'Scott',
    lname: 'Johnson',
    grade: 11,
    birthDate: '06/21/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '32 HARTWELL AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jane Johnson',
    parentEmailAddress: 'jjohnson@aol.com',
    parentPhoneNumber: '3094950710',
    unit: '',
    mname: '',
  },
  {
    fname: 'Aaron',
    lname: 'Hall',
    grade: 5,
    birthDate: '05/23/2011',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '9 SNOW TR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Eric Hall',
    parentEmailAddress: 'ehall@gmail.com',
    parentPhoneNumber: '6175919567',
    unit: '',
    mname: '',
  },
  {
    fname: 'Stephanie',
    lname: 'Brown',
    grade: 12,
    birthDate: '04/08/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '122 SPECTACLE POND RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Ronald Brown',
    parentEmailAddress: 'rbrown@yahoo.com',
    parentPhoneNumber: '8579994324',
    unit: '',
    mname: '',
  },
  {
    fname: 'Douglas',
    lname: 'Flores',
    grade: 5,
    birthDate: '04/15/2011',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '3 CHRISTINA ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Deborah Flores',
    parentEmailAddress: 'dflores@gmail.com',
    parentPhoneNumber: '6176509489',
    unit: '',
    mname: '',
  },
  {
    fname: 'Sharon',
    lname: 'Young',
    grade: 9,
    birthDate: '02/19/2007',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '70 HARTWELL AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Craig Young',
    parentEmailAddress: 'cyoung@aol.com',
    parentPhoneNumber: '3098736815',
    unit: '',
    mname: '',
  },
  {
    fname: 'Denise',
    lname: 'Bell',
    grade: 12,
    birthDate: '02/26/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '508 GREAT RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Maria Bell',
    parentEmailAddress: 'mbell@hotmail.com',
    parentPhoneNumber: '3099600337',
    unit: '',
    mname: '',
  },
  {
    fname: 'Dennis',
    lname: 'Roberts',
    grade: 12,
    birthDate: '07/24/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '17 HARTWELL AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Diane Roberts',
    parentEmailAddress: 'droberts@aol.com',
    parentPhoneNumber: '3094725298',
    unit: '',
    mname: '',
  },
  {
    fname: 'Peter',
    lname: 'Rivera',
    grade: 9,
    birthDate: '05/21/2007',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '37 GRAY FARM RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Kelly Rivera',
    parentEmailAddress: 'krivera@comcast.com',
    parentPhoneNumber: '8578826831',
    unit: '',
    mname: '',
  },
  {
    fname: 'Jimmy',
    lname: 'Evans',
    grade: 1,
    birthDate: '06/16/2015',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '28 DARRELL DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'William Evans',
    parentEmailAddress: 'wevans@aol.com',
    parentPhoneNumber: '8572819703',
    unit: '',
    mname: '',
  },
  {
    fname: 'Brandon',
    lname: 'Perez',
    grade: 'K',
    birthDate: '05/05/2016',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '45 HARTWELL AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Benjamin Perez',
    parentEmailAddress: 'bperez@hotmail.com',
    parentPhoneNumber: '6178730913',
    unit: '',
    mname: '',
  },
  {
    fname: 'Russell',
    lname: 'Howard',
    grade: 2,
    birthDate: '05/08/2014',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '160 GREAT RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'James Howard',
    parentEmailAddress: 'jhoward@hotmail.com',
    parentPhoneNumber: '3095391249',
    unit: '',
    mname: '',
  },
  {
    fname: 'Anthony',
    lname: 'Cook',
    grade: 11,
    birthDate: '08/17/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '77 FOSTER ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Peter Cook',
    parentEmailAddress: 'pcook@aol.com',
    parentPhoneNumber: '8576751115',
    unit: '',
    mname: '',
  },
  {
    fname: 'Patrick',
    lname: 'Barnes',
    grade: 12,
    birthDate: '07/18/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '18 CRICKET LN',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Joshua Barnes',
    parentEmailAddress: 'jbarnes@gmail.com',
    parentPhoneNumber: '8579620960',
    unit: '',
    mname: '',
  },
  {
    fname: 'Evelyn',
    lname: 'Bailey',
    grade: 4,
    birthDate: '06/19/2012',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '55 NASHOBA TL',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Albert Bailey',
    parentEmailAddress: 'abailey@verizon.com',
    parentPhoneNumber: '3099645746',
    unit: '',
    mname: '',
  },
  {
    fname: 'Ernest',
    lname: 'Lewis',
    grade: 10,
    birthDate: '01/15/2006',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '7 NASHOBA RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Alan Lewis',
    parentEmailAddress: 'alewis@gmail.com',
    parentPhoneNumber: '3094659210',
    unit: '',
    mname: '',
  },
  {
    fname: 'Alan',
    lname: 'Coleman',
    grade: 5,
    birthDate: '06/03/2011',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '8 EDSEL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Brenda Coleman',
    parentEmailAddress: 'bcoleman@gmail.com',
    parentPhoneNumber: '8575102677',
    unit: '',
    mname: '',
  },
  {
    fname: 'Marilyn',
    lname: 'Gray',
    grade: 4,
    birthDate: '05/12/2012',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '23 PICKARD LN',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Evelyn Gray',
    parentEmailAddress: 'egray@verizon.com',
    parentPhoneNumber: '3097770103',
    unit: '',
    mname: '',
  },
  {
    fname: 'Norma',
    lname: 'Morris',
    grade: 6,
    birthDate: '02/08/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '32 ADAMS ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jesse Morris',
    parentEmailAddress: 'jmorris@comcast.com',
    parentPhoneNumber: '7818038615',
    unit: '',
    mname: '',
  },
  {
    fname: 'Philip',
    lname: 'Williams',
    grade: 10,
    birthDate: '07/14/2006',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '456 NEWTOWN RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Andrea Williams',
    parentEmailAddress: 'awilliams@aol.com',
    parentPhoneNumber: '6177219492',
    unit: '',
    mname: '',
  },
  {
    fname: 'Judy',
    lname: 'Edwards',
    grade: 5,
    birthDate: '07/14/2011',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '4 VALLEY DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Dorothy Edwards',
    parentEmailAddress: 'dedwards@gmail.com',
    parentPhoneNumber: '8577988104',
    unit: '',
    mname: '',
  },
  {
    fname: 'Andrea',
    lname: 'Moore',
    grade: 1,
    birthDate: '04/23/2015',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '35 NORFOLK DR',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Matthew Moore',
    parentEmailAddress: 'mmoore@hotmail.com',
    parentPhoneNumber: '8576222610',
    unit: '',
    mname: '',
  },
  {
    fname: 'Katherine',
    lname: 'Long',
    grade: 12,
    birthDate: '02/17/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '173 TAHATTAWAN RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jacqueline Long',
    parentEmailAddress: 'jlong@hotmail.com',
    parentPhoneNumber: '3099407018',
    unit: '',
    mname: '',
  },
  {
    fname: 'Clarence',
    lname: 'Perry',
    grade: 3,
    birthDate: '01/11/2013',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '13 WINGED COVE RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Chris Perry',
    parentEmailAddress: 'cperry@yahoo.com',
    parentPhoneNumber: '5086486642',
    unit: '',
    mname: '',
  },
  {
    fname: 'Michael',
    lname: 'Peterson',
    grade: 11,
    birthDate: '03/19/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '6 FOSTER ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Wanda Peterson',
    parentEmailAddress: 'wpeterson@gmail.com',
    parentPhoneNumber: '7816187004',
    unit: '',
    mname: '',
  },
  {
    fname: 'Stephen',
    lname: 'Hernandez',
    grade: 'K',
    birthDate: '01/21/2016',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '84 HARTWELL AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Marie Hernandez',
    parentEmailAddress: 'mhernandez@yahoo.com',
    parentPhoneNumber: '5089135143',
    unit: '',
    mname: '',
  },
  {
    fname: 'Phillip',
    lname: 'Scott',
    grade: 8,
    birthDate: '01/20/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '111 GOLDSMITH ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jean Scott',
    parentEmailAddress: 'jscott@verizon.com',
    parentPhoneNumber: '7819796240',
    unit: '',
    mname: '',
  },
  {
    fname: 'Bonnie',
    lname: 'Diaz',
    grade: 11,
    birthDate: '08/08/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '46 HARTWELL AV',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Louise Diaz',
    parentEmailAddress: 'ldiaz@hotmail.com',
    parentPhoneNumber: '3093864921',
    unit: '',
    mname: '',
  },
  {
    fname: 'Ann',
    lname: 'Watson',
    grade: 11,
    birthDate: '08/27/2005',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '22 POWERS RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jack Watson',
    parentEmailAddress: 'jwatson@yahoo.com',
    parentPhoneNumber: '8576847963',
    unit: '',
    mname: '',
  },
  {
    fname: 'Jacqueline',
    lname: 'Robinson',
    grade: 5,
    birthDate: '05/24/2011',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '212 GREAT RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Paula Robinson',
    parentEmailAddress: 'probinson@hotmail.com',
    parentPhoneNumber: '5089371959',
    unit: '',
    mname: '',
  },
  {
    fname: 'Frances',
    lname: 'Mitchell',
    grade: 10,
    birthDate: '05/28/2006',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '6 JEANNETTE WAY',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Lisa Mitchell',
    parentEmailAddress: 'lmitchell@aol.com',
    parentPhoneNumber: '5089821477',
    unit: '',
    mname: '',
  },
  {
    fname: 'Eugene',
    lname: 'Taylor',
    grade: 2,
    birthDate: '05/26/2014',
    schoolYear: 'FY22',
    school: 'SLS',
    address: '5 HAZARD WY',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Elizabeth Taylor',
    parentEmailAddress: 'etaylor@aol.com',
    parentPhoneNumber: '8573961039',
    unit: '',
    mname: '',
  },
  {
    fname: 'Susan',
    lname: 'Morgan',
    grade: 5,
    birthDate: '03/11/2011',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '28 LAWRENCE ST',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Rose Morgan',
    parentEmailAddress: 'rmorgan@aol.com',
    parentPhoneNumber: '3093860822',
    unit: '',
    mname: '',
  },
  {
    fname: 'Joshua',
    lname: 'Collins',
    grade: 2,
    birthDate: '06/19/2014',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '6 TROT RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Jeremy Collins',
    parentEmailAddress: 'jcollins@verizon.com',
    parentPhoneNumber: '5088454051',
    unit: '',
    mname: '',
  },
  {
    fname: 'Martin',
    lname: 'Green',
    grade: 8,
    birthDate: '01/16/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '16 CRANE RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Christine Green',
    parentEmailAddress: 'cgreen@gmail.com',
    parentPhoneNumber: '6179823933',
    unit: '',
    mname: '',
  },
  {
    fname: 'Amy',
    lname: 'Kelly',
    grade: 12,
    birthDate: '07/12/2004',
    schoolYear: 'FY22',
    school: 'LHS',
    address: '62 GRIST MILL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Kathy Kelly',
    parentEmailAddress: 'kkelly@aol.com',
    parentPhoneNumber: '7813164453',
    unit: '',
    mname: '',
  },
  {
    fname: 'Walter',
    lname: 'Rogers',
    grade: 2,
    birthDate: '04/17/2014',
    schoolYear: 'FY22',
    school: 'RSS',
    address: '6 BLOOD RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Carol Rogers',
    parentEmailAddress: 'crogers@comcast.com',
    parentPhoneNumber: '7815769936',
    unit: '',
    mname: '',
  },
  {
    fname: 'Robert',
    lname: 'Sanchez',
    grade: 8,
    birthDate: '05/26/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '1250 HILL RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Kimberly Sanchez',
    parentEmailAddress: 'ksanchez@hotmail.com',
    parentPhoneNumber: '7812870033',
    unit: '',
    mname: '',
  },
  {
    fname: 'Margaret',
    lname: 'Clark',
    grade: 6,
    birthDate: '06/05/2010',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '2 SARAH DOUBLET RD',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Stephen Clark',
    parentEmailAddress: 'sclark@yahoo.com',
    parentPhoneNumber: '5083114277',
    unit: '',
    mname: '',
  },
  {
    fname: 'Paul',
    lname: 'Wiliams',
    grade: 8,
    birthDate: '02/01/2008',
    schoolYear: 'FY22',
    school: 'LMS',
    address: '11 BUMBLEBEE LN',
    city: 'Littleton',
    state: 'MA',
    zip: '01460',
    parentName: 'Andrew Wiliams',
    parentEmailAddress: 'awiliams@hotmail.com',
    parentPhoneNumber: '6175822974',
    unit: '',
    mname: '',
  }
];


export { sample };
