const UnipayXmlTest = (paid, cartTotal) => {

  let sampleData = '';
  // TODO all of these values must be in config
  // it is not secure to include this info in html. We can find a different company and ask the schools to use that instead.
  //  let uniqueID = paid[0].paymentId;
  const returnURL = 'test.flowlyst.io';
  const cancelButtonURL = 'test.flowlyst.io';
  const returnButtonText = 'Go Back to registration Page';
  const forceTimeoutRedirectURL = 'test.flowlyst.io'; 
  let xmlData = `<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE cXML SYSTEM 'http://xml.cxml.org/schemas/cXML/1.2.014/cXML.dtd'><cXML xml:lang='en-us'><cart><transaction lineNum='1' txID='18397'><qty>1</qty><amount>${cartTotal}</amount><accessKey>df18ee0f-8d9a-45aa-a29e-d487c21de374</accessKey><customerID>1463</customerID><C130771>${
      paid[0].uniqueID
    }</C130771><C130772>${
      paid[0].address
    }</C130772><C130773>${sampleData}</C130773><C130774>${
      paid[0].city
    }</C130774><C130775>${paid[0].state}</C130775><C130776>${
      paid[0].zip
    }</C130776><C130777>${paid[0].parentPhoneNumber}</C130777><C130778>${
      paid[0].parentEmailAddress
    }</C130778><C130779>${paid[0].due}</C130779><C130780>${paid[0].fname} ${
      paid[0].lname
    }</C130780><C130781>${paid[0].grade}</C130781><C130782>${
      paid[1] ? paid[1].due : sampleData
    }</C130782><C130783>${
      paid[1] ? paid[1].fname + ' ' + paid[1].lname : sampleData
    }</C130783><C130784>${
      paid[1] ? paid[1].grade : sampleData
    }</C130784><C130785>${paid[2] ? paid[2].due : sampleData}</C130785><C130786>${
      paid[2] ? paid[2].fname + ' ' + paid[2].lname : sampleData
    }</C130786><C130787>${
      paid[2] ? paid[2].grade : sampleData
    }</C130787><C130788>${paid[3] ? paid[3].due : sampleData}</C130788><C130789>${
      paid[3] ? paid[3].fname + ' ' + paid[3].lname : sampleData
    }</C130789><C130790>${
      paid[3] ? paid[3].grade : sampleData
    }</C130790><C130791>${paid[4] ? paid[4].due : sampleData}</C130791><C130792>${
      paid[4] ? paid[4].fname + ' ' + paid[4].lname : sampleData
    }</C130792><C130793>${
      paid[4] ? paid[4].grade : sampleData
    }</C130793><C130794>${sampleData}</C130794><postBackURL></postBackURL><allowModify>1</allowModify></transaction><returnURL>${returnURL}</returnURL><returnButtonText>${returnButtonText}</returnButtonText><showCancelButton>true</showCancelButton><cancelButtonURL>${cancelButtonURL}</cancelButtonURL><cancelButtonText>Cancel Text</cancelButtonText><forceTimeoutTimeFrame>0</forceTimeoutTimeFrame><forceTimeoutRedirectURL>${forceTimeoutRedirectURL}</forceTimeoutRedirectURL></cart></cXML>`;
    
    return xmlData;
  }

  const UnipayXmlProd = (paid, cartTotal) => {

    let sampleData = '';
    // TODO all of these values must be in config
    // it is not secure to include this info in html. We can find a different company and ask the schools to use that instead.
    //  let uniqueID = paid[0].paymentId;
    const returnURL = 'test.flowlyst.io';
    const cancelButtonURL = 'test.flowlyst.io';
    const returnButtonText = 'Go Back to registration Page';
    const forceTimeoutRedirectURL = 'test.flowlyst.io'; 
    let xmlData = `<?xml version='1.0' encoding='UTF-8' ?><!DOCTYPE cXML SYSTEM 'http://xml.cxml.org/schemas/cXML/1.2.014/cXML.dtd'><cXML xml:lang='en-us'><cart><transaction lineNum='1' txID='29699'><qty>1</qty><amount>${cartTotal}</amount><accessKey>2e347c21-a2e0-43fd-9120-f5b43ca2e3ce</accessKey><customerID>2093</customerID><C221836>${
        paid[0].uniqueID
      }</C221836><C221837>${
        paid[0].address
      }</C221837><C221838>${sampleData}</C221838><C221839>${
        paid[0].city
      }</C221839><C221840>${paid[0].state}</C221840><C221841>${
        paid[0].zip
      }</C221841><C221842>${paid[0].parentPhoneNumber}</C221842><C221843>${
        paid[0].parentEmailAddress
      }</C221843><C221844>${paid[0].due}</C221844><C221845>${paid[0].fname} ${
        paid[0].lname
      }</C221845><C221846>${paid[0].grade}</C221846><C221847>${
        paid[1] ? paid[1].due : sampleData
      }</C221847><C221848>${
        paid[1] ? paid[1].fname + ' ' + paid[1].lname : sampleData
      }</C221848><C221849>${
        paid[1] ? paid[1].grade : sampleData
      }</C221849><C221850>${paid[2] ? paid[2].due : sampleData}</C221850><C221851>${
        paid[2] ? paid[2].fname + ' ' + paid[2].lname : sampleData
      }</C221851><C221852>${
        paid[2] ? paid[2].grade : sampleData
      }</C221852><C221853>${paid[3] ? paid[3].due : sampleData}</C221853><C221854>${
        paid[3] ? paid[3].fname + ' ' + paid[3].lname : sampleData
      }</C221854><C221855>${
        paid[3] ? paid[3].grade : sampleData
      }</C221855><C221856>${paid[4] ? paid[4].due : sampleData}</C221856><C221857>${
        paid[4] ? paid[4].fname + ' ' + paid[4].lname : sampleData
      }</C221857><C221858>${
        paid[4] ? paid[4].grade : sampleData
      }</C221858><C221859>${
        sampleData}</C221859><postBackURL></postBackURL><allowModify>1</allowModify></transaction><returnURL>${
        returnURL}</returnURL><returnButtonText>${
        returnButtonText}</returnButtonText><showCancelButton>true</showCancelButton><cancelButtonURL>${
        cancelButtonURL}</cancelButtonURL><cancelButtonText>Cancel registration</cancelButtonText><forceTimeoutTimeFrame>0</forceTimeoutTimeFrame><forceTimeoutRedirectURL>${
        forceTimeoutRedirectURL}</forceTimeoutRedirectURL></cart></cXML>`;
      
      return xmlData;
    }

    

export {UnipayXmlTest, UnipayXmlProd};