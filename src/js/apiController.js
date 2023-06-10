import { Debug } from './debug';

// API documentation
// https://www.thenewsapi.com/documentation

export class ApiController {
    constructor() {
        this.debugging = false;
        this.prefix = "apiController.js"
        this.debug = new Debug(this.prefix, this.debugging);
        
        // This is a switch to turn off API calls, because I am testing this with the free version. Limits to 100 article summary calls and 25 full article calls.
        this.turnOnApiCalls = true;

    }
    async getHeadlines(publishedOn = "", locale = "us", language = "en") {
        //Example response
        /*
            {
    "data": {
        "general": [
            {
                "uuid": "ad463a28-723a-401a-9b65-4fe56b23f5ea",
                "title": "Trump says he’s indicted in Mar-a-Lago classified documents case",
                "description": "Former President Trump says he has been indicted by a federal grand jury on charges that he mishandled classified material by keeping hundreds of sensitive documents at his Mar-a-Lago estate.",
                "keywords": "News, classified documents, donald trump, fbi, justice department, mar-a-lago, trump indictment",
                "snippet": "Former President Trump says he has been indicted by a federal grand jury on charges that he mishandled classified material by keeping hundreds of sensitive docu...",
                "url": "https://nypost.com/2023/06/08/trump-indicted-in-mar-a-lago-classified-documents-case/",
                "image_url": "https://nypost.com/wp-content/uploads/sites/2/2023/06/trump-indicted-1.jpg?quality=75&strip=all&w=1024",
                "language": "en",
                "published_at": "2023-06-08T23:34:43.000000Z",
                "source": "nypost.com",
                "categories": [
                    "general"
                ],
                "locale": "us",
                "similar": [
                    {
                        "uuid": "32dabd2d-5665-40bb-ae17-0f2728e22612",
                        "title": "Trump says he’s been indicted in federal classified documents probe",
                        "description": "The documents investigation has been overseen by special counsel Jack Smith and appeared to be nearing the charging phase in recent days.",
                        "keywords": "",
                        "snippet": "The documents investigation has been overseen by special counsel Jack Smith and appeared to be nearing the charging phase in recent days. Smith’s team recentl...",
                        "url": "https://www.politico.com/news/2023/06/08/trump-says-hes-been-indicted-in-classified-documents-probe-00101165",
                        "image_url": "https://static.politico.com/c6/70/64491f294eb99718dff20315fdf6/trump-classified-documents-50154.jpg",
                        "language": "en",
                        "published_at": "2023-06-08T23:37:22.000000Z",
                        "source": "politico.com",
                        "categories": [
                            "politics",
                            "general"
                        ],
                        "locale": "us"
                    },
                    {
                        "uuid": "fac6bdf7-0d16-4753-8a1a-7cc2eb56ce89",
                        "title": "Trump Indicted in Classified Documents Scandal",
                        "description": "Trump had been fighting to slow down the federal investigation for months. Now he’ll have to face the music.",
                        "keywords": "Donald J. Trump, Indictment, Mar-A-Lago",
                        "snippet": "Former President Donald Trump has been indicted by a federal grand jury for hoarding classified documents at Mar-a-Lago long after he left the White House, repo...",
                        "url": "https://www.thedailybeast.com/trump-indicted-in-classified-documents-scandal",
                        "image_url": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1686251213/230607-trump-indictment-hero_lkjhea",
                        "language": "en",
                        "published_at": "2023-06-08T23:40:18.000000Z",
                        "source": "thedailybeast.com",
                        "categories": [
                            "general",
                            "politics"
                        ],
                        "locale": "us"
                    },
                    {
                        "uuid": "3cd52952-abe6-41aa-b895-606c3533a51e",
                        "title": "Trump says he’s been indicted again: The Mar-a-Lago classified documents case, explained",
                        "description": "Trump announced on Truth Social that he’s been told to present himself at a Florida court house on Tuesday.",
                        "keywords": "",
                        "snippet": "Former President Donald Trump is now facing his second indictment — this time, from the feds.\n\nTrump announced in posts on Truth Social Thursday evening that ...",
                        "url": "https://www.vox.com/2023/6/8/23680209/trump-indicted-classified-documents-florida-truth-social",
                        "image_url": "https://cdn.vox-cdn.com/thumbor/RqXfAirn-lVyrhG9hhMTdZfk6Mo=/0x0:6135x3212/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24713081/GettyImages_1495224142.jpg",
                        "language": "en",
                        "published_at": "2023-06-09T00:34:12.000000Z",
                        "source": "vox.com",
                        "categories": [
                            "general",
                            "politics",
                            "entertainment"
                        ],
                        "locale": "us"
                    },
                    {
                        "uuid": "5afc8379-9df9-49bd-88d3-580c4857065f",
                        "title": "Live updates | Trump Classified Documents Indictment",
                        "description": "Former President Donald Trump said Thursday on social media that he’s been indicted on charges of mishandling classified documents at his Florida estate",
                        "keywords": "Indictments, Politics, Washington news, General news, Politics, U.S. news",
                        "snippet": "FILE - President Donald Trump sits at his desk after a meeting with Intel CEO Brian Krzanich, left, and members of his staff in the Oval Office of the White Hou...",
                        "url": "https://abcnews.go.com/US/wireStory/live-updates-trump-classified-documents-indictment-99950410",
                        "image_url": "https://s.abcnews.com/images/US/wirestory_d50264cc69b9a6eefd8e47821359ff5e_12x5_992.jpg",
                        "language": "en",
                        "published_at": "2023-06-09T00:38:33.000000Z",
                        "source": "abcnews.go.com",
                        "categories": [
                            "general",
                            "politics"
                        ],
                        "locale": "us"
                    },
                    {
                        "uuid": "baab44cb-6270-4892-8e0d-0fa4f14ec161",
                        "title": "Timeline: The journey of Trump’s classified documents",
                        "description": "FBI agents found more than 100 classified documents from Mar-a-Lago that included 11 sets of classified documents.",
                        "keywords": "",
                        "snippet": "Timeline: The journey of Trump’s classified documents\n\nWASHINGTON − The Department of Justice's long-running investigation into the classified documents fou...",
                        "url": "https://www.usatoday.com/story/news/politics/2023/06/08/timeline-trump-classified-documents/70293240007/",
                        "image_url": "https://www.gannett-cdn.com/presto/2022/09/07/USAT/d30847b1-e16e-4a8f-9140-29bf0cbfbd0f-AP_Trump_National_Archives.jpg?auto=webp&crop=1023,575,x0,y0&format=pjpg&width=1200",
                        "language": "en",
                        "published_at": "2023-06-09T00:54:15.000000Z",
                        "source": "usatoday.com",
                        "categories": [
                            "general"
                        ],
                        "locale": "us"
                    }
                ]
            },
            {
                "uuid": "aab06d2a-486c-4817-9e31-cc161e842487",
                "title": "DeSantis Criticizes DOJ's ‘Zealous’ Prosecution of Donald Trump",
                "description": "Ron DeSantis criticized the DOJ's “zealous” prosecution of Donald Trump after news broke that federal prosecutors indicted him.",
                "keywords": "",
                "snippet": "Republican presidential hopeful Gov. Ron DeSantis (R-FL) criticized the U.S. Justice Department’s (DOJ) “zealous” prosecution of former President Donald T...",
                "url": "https://www.breitbart.com/politics/2023/06/08/ron-desantis-criticizes-justice-departments-zealous-prosecution-of-donald-trump/",
                "image_url": "https://media.breitbart.com/media/2023/05/Ron-DeSantis-5-640x335.jpg",
                "language": "en",
                "published_at": "2023-06-09T02:57:57.000000Z",
                "source": "breitbart.com",
                "categories": [
                    "general",
                    "politics"
                ],
                "locale": "us",
                "similar": [
                    {
                        "uuid": "4c6c9aa7-2274-46ff-a158-2058d1887b53",
                        "title": "DeSantis campaign posts fake images of Trump hugging Fauci in social media video",
                        "description": "The presidential campaign for Florida Gov. Ron DeSantis released a video on social media that appears to use images generated by artificial intelligence to depict former President Donald Trump hugging Dr. Anthony Fauci.",
                        "keywords": "2020 presidential election, anthony fauci, artificial intelligence, business and industry sectors, business, economy and trade, computer science and information technology, domestic alerts, domestic-2020 elections, domestic-business, domestic-health and science, domestic-us politics, donald trump, elections (by type), elections and campaigns, government and public administration, iab-artificial intelligence, iab-business and finance, iab-computing, iab-elections, iab-industries, iab-internet, iab-politics, iab-social networking, iab-technology & computing, iab-technology industry, international alerts, international-business, international-health and science, international-us 2020 elections, international-us politics, misc people, political candidates, political figures - us, politics, ron desantis, social media, society, technology, us elections, us federal elections, us presidential elections",
                        "snippet": "CNN —\n\nThe presidential campaign for Florida Gov. Ron DeSantis released a video on social media that appears to use images generated by artificial intelligenc...",
                        "url": "https://www.cnn.com/2023/06/08/politics/desantis-campaign-video-fake-ai-image/index.html",
                        "image_url": "https://media.cnn.com/api/v1/images/stellar/prod/230608152347-desantis-trump-fauci-split.jpg?c=16x9&q=w_800,c_fill",
                        "language": "en",
                        "published_at": "2023-06-08T19:47:20.000000Z",
                        "source": "cnn.com",
                        "categories": [
                            "general"
                        ],
                        "locale": "us"
                    },
                    {
                        "uuid": "001e3223-1625-4c4a-a074-9506f7f30dfd",
                        "title": "Vance, MTG criticize DeSantis campaign for posting apparently fake Trump images",
                        "description": "Some images of Trump and Fauci standing next to each other are real. But others appear to be fake images, showing Trump hugging and kissing Fauci.",
                        "keywords": "",
                        "snippet": "One such image has distorted text on the White House briefing room seal, where it should say “The White House” and “Washington.” Two other images of the...",
                        "url": "https://www.politico.com/news/2023/06/08/vance-mtg-desantis-fake-trump-fauci-images-00101099",
                        "image_url": "https://static.politico.com/a5/15/0c299f0e4ea48a0a825b0a2707f1/https-delivery.gettyimages.com/downloads/1240191090",
                        "language": "en",
                        "published_at": "2023-06-08T19:53:43.000000Z",
                        "source": "politico.com",
                        "categories": [
                            "politics",
                            "general"
                        ],
                        "locale": "us"
                    },
                    {
                        "uuid": "090938c5-ed97-42d9-86ab-1d94baca401d",
                        "title": "AP source: Donald Trump indicted on 7 counts in connection with classified documents probe",
                        "description": "AP source: Donald Trump indicted on 7 counts in connection with classified documents probe",
                        "keywords": "Indictments, Politics, Washington news, General news",
                        "snippet": "Trump could still be elected president despite 2nd indictment, experts say",
                        "url": "https://abcnews.go.com/US/wireStory/ap-source-donald-trump-indicted-7-counts-connection-99949229",
                        "image_url": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
                        "language": "en",
                        "published_at": "2023-06-09T00:06:01.000000Z",
                        "source": "abcnews.go.com",
                        "categories": [
                            "general",
                            "politics"
                        ],
                        "locale": "us"
                    },
                    {
                        "uuid": "7037518d-7594-480d-9f59-34a882ffbcea",
                        "title": "Why Donald Trump was indicted in Florida instead of Washington D.C",
                        "description": "MSNBC legal analyst Lisa Rubin discusses why Donald Trump was indicted in Florida, instead of Washington D.C. as was expected.",
                        "keywords": "",
                        "snippet": "MSNBC legal analyst Lisa Rubin discusses why Donald Trump was indicted in Florida, instead of Washington D.C. as was expected. \"The department of justice policy...",
                        "url": "https://www.msnbc.com/all-in/watch/why-donald-trump-was-indicted-in-florida-instead-of-washington-d-c-181274181657",
                        "image_url": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2023_06/1686271377792_n_hayes_whyflorida_230608_1920x1080-owcxfs.jpg",
                        "language": "en",
                        "published_at": "2023-06-09T00:43:14.000000Z",
                        "source": "msnbc.com",
                        "categories": [
                            "general",
                            "politics"
                        ],
                        "locale": "us"
                    },
                    {
                        "uuid": "1feb1e19-7f43-45fa-b1a8-0d93066c06d0",
                        "title": "Donald Trump indicted for allegedly mishandling classified documents seized at Mar-a-Lago: Live updates",
                        "description": "Donald Trump was indicted for mishandling classified documents seized at Mar-a-Lago, an unprecedented federal step against a former president.",
                        "keywords": "",
                        "snippet": "Donald Trump indicted for allegedly mishandling classified documents seized at Mar-a-Lago: Live updates The federal charges come amid wide-ranging legal challen...",
                        "url": "https://www.usatoday.com/story/news/politics/2023/06/08/trump-indicted-classified-documents/70232514007/",
                        "image_url": "https://www.gannett-cdn.com/presto/2023/05/16/USAT/3102c299-af2a-4dd7-9277-c9b2fe4be3b9-AP_Trump_Verdict_Women.jpg?auto=webp&crop=5999,3375,x0,y305&format=pjpg&width=1200",
                        "language": "en",
                        "published_at": "2023-06-09T01:15:24.000000Z",
                        "source": "usatoday.com",
                        "categories": [
                            "general"
                        ],
                        "locale": "us"
                    }
                ]
            }
        ],
        "business": ...,
        "sports": ...,
        "tech": ...,
        "science": ...,
        "health": ...
    }
    }
        */
        if (this.turnOnApiCalls) {
            let url = `${SERVER_URL}headlines?locale=${locale}&language=${language}&api_token=${API_TOKEN}`;
            url += publishedOn == "" ? "" : `&published_on=${publishedOn}`;
            this.debug.debug("getHeadlines URL", url);
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Reponse from the getHeadlines call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("getHeadlines", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);

    }
    async topStories(search = "", searchFields = "", categories = "", publishedOn = "", publishedBefore = "", publishedAfter = "", locale = "us", language = "en") {
        //Example response
        /*
            {
    "meta": {
        "found": 694864,
        "returned": 10,
        "limit": 10,
        "page": 1
    },
    "data": [
        {
            "uuid": "fe01d54c-42b2-42a9-be2c-f820ede296fe",
            "title": "Jays' Anthony Bass says anti-LGBTQIA+ post he shared wasn't hateful",
            "description": "Blue Jays pitcher Anthony Bass said Thursday that he didn't believe the post he shared, which described the sale of LGBTQIA+ merchandise as",
            "keywords": "",
            "snippet": "TORONTO -- Toronto Blue Jays pitcher Anthony Bass said Thursday he doesn't believe an anti-LGBTQIA+ social media post he shared last month was hateful.\n\nThe rig...",
            "url": "https://www.espn.com/mlb/story/_/id/37823206/jays-anthony-bass-says-anti-lgbtq+-post-shared-hateful",
            "image_url": "https://a4.espncdn.com/combiner/i?img=/photo/2023/0609/r1184409_1296x729_16-9.jpg",
            "language": "en",
            "published_at": "2023-06-09T05:24:23.000000Z",
            "source": "espn.com",
            "categories": [
                "sports",
                "general"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "d5fe8fb3-27ac-430e-accd-d948acd41857",
            "title": "The potent U.S. arsenal for Ukraine’s counteroffensive",
            "description": "The U.S. and Western allies have laid out a deliberate approach to arming Ukraine, focusing on systems that complement one another on the battlefield.",
            "keywords": "",
            "snippet": "Europe The potent U.S. arsenal for Ukraine’s counteroffensive\n\nListen 5 min Comment Gift Article Share\n\nArmed with Western weapons and trained in NATO tactics...",
            "url": "https://www.washingtonpost.com/world/2023/06/09/ukraine-counteroffensive-weapons-russia-war/",
            "image_url": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2BFIVHJCEVAR7BVUDDEIULSEIM.jpg&w=1440",
            "language": "en",
            "published_at": "2023-06-09T05:00:06.000000Z",
            "source": "washingtonpost.com",
            "categories": [
                "general",
                "politics"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "0db413a3-88f2-4aef-b4b1-032706768047",
            "title": "The twice-impeached Trump now faces his second criminal indictment as he looks to recapture White House",
            "description": "Donald Trump, who has often lied, unquestionably told the truth when he said Thursday was a “dark day” for America.",
            "keywords": "brand safety-nsf crime, brand safety-nsf mature, brand safety-nsf sensitive, continents and regions, crime, law enforcement and corrections, criminal investigations, criminal law, criminal offenses, domestic alerts, domestic-us news, domestic-us politics, donald trump, elections and campaigns, government and public administration, government bodies and offices, government departments and authorities, government organizations - us, grand jury, iab-crime, iab-elections, iab-law, iab-politics, impeachment, indictments, international alerts, international-impeachment, international-us news, international-us politics, investigations, jack smith (lawyer), joe biden, justice departments, law and legal system, manhattan, new york (state), new york city, north america, northeastern united states, political figures - us, political organizations, political scandals, politics, scandals, the americas, trump criminal cases, trump document investigation, united states, us department of justice, us federal departments and agencies, us federal government, us political parties, us republican party, white house",
            "snippet": "CNN —\n\nDonald Trump, who has often lied, unquestionably told the truth when he said Thursday was a “dark day” for America.\n\nThe ex-president’s social me...",
            "url": "https://www.cnn.com/2023/06/09/politics/analysis-donald-trump-indictment/index.html",
            "image_url": "https://media.cnn.com/api/v1/images/stellar/prod/230608222340-07-donald-trump-neutral.jpg?c=16x9&q=w_800,c_fill",
            "language": "en",
            "published_at": "2023-06-09T04:51:15.000000Z",
            "source": "cnn.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "3619b76a-412e-4e62-b875-3acffc5616b8",
            "title": "4 takeaways from Trump’s federal indictment",
            "description": "The history, the familiar reactions, and how it might play in 2024.",
            "keywords": "",
            "snippet": "Listen 7 min Comment Gift Article Share\n\nFor the second time in a little more than two months, Donald Trump has been indicted. In late March, it was for alleged...",
            "url": "https://www.washingtonpost.com/politics/2023/06/08/trump-documents-indictment-takeaways/",
            "image_url": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FFGA3VA3HFADLD7I6RT5ICXIEA.jpg&w=1440",
            "language": "en",
            "published_at": "2023-06-09T04:47:06.000000Z",
            "source": "washingtonpost.com",
            "categories": [
                "politics",
                "general"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "fc5cdd45-fde7-4556-a8b4-faf6178ec595",
            "title": "China can't rely on Southeast Asian exports to offset a U.S. slowdown",
            "description": "China's exports to the U.S. and Southeast Asian countries fell sharply in May.",
            "keywords": "Stock markets, Markets, Market Insider, United States, China, Economic events, International trade, Foreign policy, business news",
            "snippet": "Pictured here is a cargo ship sailing from China's Yantai port to Indonesia on April 23, 2023.\n\nBEIJING — China can't easily rely on its neighbors as export m...",
            "url": "https://www.cnbc.com/2023/06/09/china-cant-rely-on-southeast-asian-exports-to-offset-a-us-slowdown.html",
            "image_url": "https://image.cnbcfm.com/api/v1/image/107253117-1686199623184-gettyimages-1252129997-Port_Trade_Growth_In_China.jpeg?v=1686285633&w=1920&h=1080",
            "language": "en",
            "published_at": "2023-06-09T04:40:33.000000Z",
            "source": "cnbc.com",
            "categories": [
                "general",
                "business"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "1587ffcc-7daa-40ff-89a2-b86cc8982e0b",
            "title": "China's temple visits skyrocket amid economic uncertainty",
            "description": "China's post-Covid reopening was supposed to be the stimulant that the world needed. But after an early burst of activity, growth in the world's second largest ...",
            "keywords": "economy, China's temple visits skyrocket amid economic uncertainty - CNN",
            "snippet": "Hong Kong (CNN) China's post-Covid reopening was supposed to be the stimulant that the world needed. But after an early burst of activity , growth in the world'...",
            "url": "https://www.cnn.com/2023/06/09/economy/china-unemployment-temple-lottery-intl-hnk/index.html",
            "image_url": "https://cdn.cnn.com/cnnnext/dam/assets/230609104143-prayers-temple-china-super-tease.jpg",
            "language": "en",
            "published_at": "2023-06-09T04:33:42.000000Z",
            "source": "cnn.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "867f17ca-4e18-43a8-b189-fc314957b3b7",
            "title": "FBI arrests Texas businessman linked to impeachment of state Attorney General Ken Paxton",
            "description": "The arrest followed a yearslong federal investigation into the Austin real estate developer — a probe in which Paxton involved his office.",
            "keywords": "",
            "snippet": "Lawyers for Paul did not immediately respond to requests for comment. One of Paxton’s defense attorneys, Dan Cogdell, said he had no additional information on...",
            "url": "https://www.politico.com/news/2023/06/09/fbi-arrests-texas-businessman-linked-to-impeachment-of-state-attorney-general-ken-paxton-00101206",
            "image_url": "https://static.politico.com/c1/92/f2583b0e416aacbea66ada6fb531/texas-attorney-general-impeachment-13498.jpg",
            "language": "en",
            "published_at": "2023-06-09T04:31:59.000000Z",
            "source": "politico.com",
            "categories": [
                "politics",
                "general"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "673c62e7-6964-45b7-869e-d9c69428b134",
            "title": "Here are the charges and how many years Trump faces in federal Mar-a-Lago indictment",
            "description": "The federal indictment lodged against former president Donald Trump includes seven charges that carry a maximum 75-year prison sentence if convicted on all coun...",
            "keywords": "News, donald trump, justice department, trump indictment",
            "snippet": "The federal indictment lodged against former president Donald Trump includes seven charges that carry a maximum 75-year prison sentence if convicted on all coun...",
            "url": "https://nypost.com/2023/06/09/the-charges-and-how-many-years-trump-faces-in-federal-mar-a-lago-indictment/",
            "image_url": "https://nypost.com/wp-content/uploads/sites/2/2023/06/newspress-collage-vd2d7xqrt-1686283655795.jpg?quality=75&strip=all&1686269465&w=1024",
            "language": "en",
            "published_at": "2023-06-09T04:26:09.000000Z",
            "source": "nypost.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "81e2e927-3cd2-4bde-94db-280e2581dd6b",
            "title": "Natalee Holloway: Joran van der Sloot, who is accused of extorting and defrauding Natalee Holloway's mom, faces Friday arraignment in federal court",
            "description": "Joran van der Sloot will be asked Friday to enter a plea in US federal court where he is accused of extorting tens of thousands of dollars from the mother of Na...",
            "keywords": "brand safety-nsf crime, brand safety-nsf sensitive, continents and regions, court trials, crime, law enforcement and corrections, criminal law, criminal offenses, domestic alerts, domestic-us news, extortion, federal bureau of investigation, government organizations - us, iab-crime, iab-law, international alerts, international-us news, joran van der sloot, latin america, law and legal system, misc people, natalee holloway, north america, peru, property crimes, south america, the americas, trial and procedure, united states, us department of justice, us federal departments and agencies",
            "snippet": "CNN —\n\nJoran van der Sloot will be asked Friday to enter a plea in US federal court where he is accused of extorting tens of thousands of dollars from the mot...",
            "url": "https://www.cnn.com/2023/06/09/us/natalee-holloway-joran-van-der-sloot-friday/index.html",
            "image_url": "https://media.cnn.com/api/v1/images/stellar/prod/230608105700-dutch-joran-van-der-sloot-is-transferred-in-a-police-car.jpg?c=16x9&q=w_800,c_fill",
            "language": "en",
            "published_at": "2023-06-09T04:24:48.000000Z",
            "source": "cnn.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "us"
        },
        {
            "uuid": "627eaabc-05ea-42c8-8caf-9c5f70357a74",
            "title": "Asiana Airlines: 'I wondered what I'd done wrong in life,' says man next to passenger who opened plane door",
            "description": "If you think you always get the bad seat when taking a flight, then spare a thought for Lee Yoon-jun. He was sat next to the man accused of opening the emergenc...",
            "keywords": "",
            "snippet": "Seoul, South Korea CNN —\n\nThink you always get the bad seat when taking a flight? Then spare a thought for Lee Yoon-jun.\n\nThe passenger he was sat next to on ...",
            "url": "https://www.cnn.com/2023/06/09/asia/air-asiana-door-open-passenger-viewpoint-intl-hnk/index.html",
            "image_url": "https://media.cnn.com/api/v1/images/stellar/prod/230607153127-air-asiana-door-open-passenger-viewpoint-intl-hnk.jpg?c=16x9&q=w_800,c_fill",
            "language": "en",
            "published_at": "2023-06-09T04:21:11.000000Z",
            "source": "cnn.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "us"
        }
    ]
    }
        */

        if (this.turnOnApiCalls) {
            let url = `${SERVER_URL}top?locale=${locale}&language=${language}&api_token=${API_TOKEN}`;
            url += search == "" ? "" : `&search=${encodeURIComponent(search)}`;
            url += searchFields == "" ? "" : `&search_fields=${searchFields}`;
            url += categories == "" ? "" : `&categories=${categories}`;
            url += publishedOn == "" ? "" : `&published_on=${publishedOn}`;
            url += publishedBefore == "" ? "" : `&published_before=${publishedBefore}`;
            url += publishedAfter == "" ? "" : `&published_after=${publishedAfter}`;
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the topStories call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error(apiPrefix, "topStories", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }
    async allNews(search = "", searchFields = "", categories = "", publishedOn = "", publishedBefore = "", publishedAfter = "", locale = "us", language = "en") {
        //Example response
        /*
            {
    "meta": {
        "found": 59721988,
        "returned": 10,
        "limit": 10,
        "page": 1
    },
    "data": [
        {
            "uuid": "80de3283-ccfe-47da-90ea-1c195c59bac3",
            "title": "Ольга Валяева. Женщина, которая приручила кризис",
            "description": "",
            "keywords": "",
            "snippet": "",
            "url": "http://cwer.ru/node/552842/",
            "image_url": "http://cwer.ru/media/favicon.ico",
            "language": "ru",
            "published_at": "2023-06-09T05:43:43.000000Z",
            "source": "cwer.ru",
            "categories": [],
            "relevance_score": null
        },
        {
            "uuid": "6c54b2fb-f808-4fd1-8595-96555e82ee3c",
            "title": "涓",
            "description": "",
            "keywords": "",
            "snippet": "",
            "url": "https://dcdv.zol.com.cn/820/8206510.html",
            "image_url": "",
            "language": "zh",
            "published_at": "2023-06-09T05:43:37.000000Z",
            "source": "dcdv.zol.com.cn",
            "categories": [
                "tech"
            ],
            "relevance_score": null
        },
        {
            "uuid": "c467cb20-f852-431f-a8d3-e63d5bba4971",
            "title": "Romhacking.net",
            "description": "Classic video game modifications, fan translations, homebrew, utilities, and learning resources.",
            "keywords": "",
            "snippet": "Super Monaco GP McLaren White Color Correction\n\nThis is a very simple and tiny IPS patch for Super Monaco GP (Genesis/Megadrive), all it does is correct the col...",
            "url": "https://www.romhacking.net//#article2917",
            "image_url": "https://www.romhacking.net/images/rhdnfacebook.jpg",
            "language": "en",
            "published_at": "2023-06-09T05:43:21.000000Z",
            "source": "romhacking.net",
            "categories": [
                "tech"
            ],
            "relevance_score": null
        },
        {
            "uuid": "36f075a9-ea9e-4932-b502-df369cbb63e9",
            "title": "PFL 4 Highlight Video: Bubba Jenkins Puts Sung Bin Jo to Sleep with RNC",
            "description": "Watch Bubba Jenkins stop put Sung Bin Jo to sleep with a Round rear-naked choke to clinch a playoff berth at PFL 4 2023 Regular Season.",
            "keywords": "",
            "snippet": "POLL\n\nHow much of the UFC on ESPN 46 card did you watch?\n\nNone of it; I checked out Sherdog's play-by-play but had better things to do!\n\nOnly the main event, wh...",
            "url": "https://www.sherdog.com/videos/highlightreels/PFL-4-Highlight-Video-Bubba-Jenkins-Puts-Sung-Bin-Jo-to-Sleep-with-RNC-19961",
            "image_url": "https://www1-cdn.sherdog.com/_images/videos/20230608104251_highlight_640_384.PNG",
            "language": "en",
            "published_at": "2023-06-09T05:42:51.000000Z",
            "source": "sherdog.com",
            "categories": [
                "sports"
            ],
            "relevance_score": null
        },
        {
            "uuid": "06e4a6b6-d332-4f4d-a023-92ab919f9fa7",
            "title": "美 주택 매물 부족…2019년 대비 절반 수준",
            "description": "미국 주택시장에서 매물로 나오는 주택수가 2019년 이후 절반 수준으로 줄었다고 CNBC가 8일(현지시간) 보도했다.수요와 공...",
            "keywords": "",
            "snippet": "카카오스토리(으)로 기사보내기 카카오톡(으)로 기사보내기 네이버밴드(으)로 기사보내기 네이버블로그(으)로 기사보내?...",
            "url": "http://news.einfomax.co.kr/news/articleView.html?idxno=4269275",
            "image_url": "https://cdn.news.einfomax.co.kr/news/thumbnail/202306/4269275_156078_431_v150.jpg",
            "language": "ko",
            "published_at": "2023-06-09T05:42:16.000000Z",
            "source": "news.einfomax.co.kr",
            "categories": [
                "general"
            ],
            "relevance_score": null
        },
        {
            "uuid": "8e985ff1-adca-4823-92f1-5cdb84dbec60",
            "title": "세종충남대병원 '신생아 집중치료 지역센터 지원사업' 선정",
            "description": "세종충남대병원이 고위험 신생아 집중치료 인프라를 확충한다.세종충남대병원은 보건복지부 공모 2023년도 신생아 집중?...",
            "keywords": "",
            "snippet": "세종충남대병원 신생아 중환자실(사진 제공: 세종충남대병원).\n\n세종충남대병원이 고위험 신생아 집중치료 인프라를 확?...",
            "url": "http://www.docdocdoc.co.kr/news/articleView.html?idxno=3006604",
            "image_url": "https://cdn.docdocdoc.co.kr/news/thumbnail/202306/3006604_3007498_3624_v150.jpg",
            "language": "ko",
            "published_at": "2023-06-09T05:41:20.000000Z",
            "source": "docdocdoc.co.kr",
            "categories": [],
            "relevance_score": null
        },
        {
            "uuid": "20414f72-ea0b-4249-86f5-47f1803fc5c9",
            "title": "바이오팜 품은 ‘삼양’, DDS 플랫폼 기술로 제약사 면모 되찾을까",
            "description": "[보스턴=김찬혁 기자] 삼양홀딩스가 신약 개발을 위한 약물전달체(DDS) 플랫폼 기업으로 거듭나겠다는 의지를 다졌다. 삼?...",
            "keywords": "",
            "snippet": "[보스턴=김찬혁 기자] 삼양홀딩스가 신약 개발을 위한 약물전달체(DDS) 플랫폼 기업으로 거듭나겠다는 의지를 다졌다. 삼?...",
            "url": "http://www.docdocdoc.co.kr/news/articleView.html?idxno=3006608",
            "image_url": "https://cdn.docdocdoc.co.kr/news/thumbnail/202306/3006608_3007503_147_v150.jpg",
            "language": "ko",
            "published_at": "2023-06-09T05:40:16.000000Z",
            "source": "docdocdoc.co.kr",
            "categories": [],
            "relevance_score": null
        },
        {
            "uuid": "31d22196-b63a-45d5-96a1-0940f90b501a",
            "title": "8大影音平台收費較量 刷信用卡為Netflix補血｜卡優新聞網",
            "description": "串流影音市占率最大的「Netflix」宣布限制「寄生帳號」，經常追劇的民眾荷包恐再變薄。《卡優新聞網》針對8家影音平?...",
            "keywords": "8大影音平台收費較量 刷信用卡為Netflix補血, 專題, 新聞",
            "snippet": "串流影音市占率最大的「Netflix」宣布限制「寄生帳號」，經常追劇的民眾荷包恐再變薄。《卡優新聞網》針對8家影音平?...",
            "url": "https://www.cardu.com.tw/news/detail.php?49023",
            "image_url": "https://imgcloud.cardu.com.tw/201910/20230609/news/13/UCardu20230609025101.jpg",
            "language": "zh",
            "published_at": "2023-06-09T05:40:03.000000Z",
            "source": "cardu.com.tw",
            "categories": [
                "general",
                "business"
            ],
            "relevance_score": null
        },
        {
            "uuid": "88465a01-8a30-42bf-947f-e53fb3ad3637",
            "title": "icash卡神還原露營趴 一蘭拉麵造型卡見碗底｜卡優新聞網",
            "description": "電子票證的造型卡越做越真，什麼「怪家私」都能神還原。愛金卡公司推出露營系列造型icash2.0，共有帳篷、露營椅與拖?...",
            "keywords": "icash卡神還原露營趴 一蘭拉麵造型卡見碗底, 卡訊, 新聞",
            "snippet": "電子票證的造型卡越做越真，什麼「怪家私」都能神還原。愛金卡公司推出露營系列造型icash2.0，共有帳篷、露營椅與拖?...",
            "url": "https://www.cardu.com.tw/news/detail.php?49026",
            "image_url": "https://imgcloud.cardu.com.tw/201910/20230609/news/13/UCardu20230609042108.jpg",
            "language": "zh",
            "published_at": "2023-06-09T05:39:55.000000Z",
            "source": "cardu.com.tw",
            "categories": [
                "general",
                "business"
            ],
            "relevance_score": null
        },
        {
            "uuid": "c12d1824-7f1d-4a30-aa70-ffd4632b3e58",
            "title": "618年中慶全面開戰 全家抽18%萊爾富5折起｜卡優新聞網",
            "description": "搶攻618年中慶商機，各大通路回饋戰全面開打。全家便利商店線上與實體通路同步動員，下單就抽18%購物金。萊爾富「618?...",
            "keywords": "618年中慶全面開戰 全家抽18%萊爾富5折起, 消費, 新聞",
            "snippet": "搶攻618年中慶商機，各大通路回饋戰全面開打。全家便利商店線上與實體通路同步動員，下單就抽18%購物金。萊爾富「618?...",
            "url": "https://www.cardu.com.tw/news/detail.php?49025",
            "image_url": "https://imgcloud.cardu.com.tw/201910/20230609/news/18/UCardu20230609044477.jpg",
            "language": "zh",
            "published_at": "2023-06-09T05:39:39.000000Z",
            "source": "cardu.com.tw",
            "categories": [
                "general",
                "business"
            ],
            "relevance_score": null
        }
    ]
    }
        */

        if (this.turnOnApiCalls) {
            let url = `${SERVER_URL}all?locale=${locale}&language=${language}&api_token=${API_TOKEN}`;
            url += search == "" ? "" : `&search=${encodeURIComponent(search)}`;
            url += searchFields == "" ? "" : `&search_fields=${searchFields}`;
            url += categories == "" ? "" : `&categories=${categories}`;
            url += publishedOn == "" ? "" : `&published_on=${publishedOn}`;
            url += publishedBefore == "" ? "" : `&published_before=${publishedBefore}`;
            url += publishedAfter == "" ? "" : `&published_after=${publishedAfter}`;
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the allNews call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("allNews", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }
    async similarNews(uuid, categories = "", publishedOn = "", publishedBefore = "", publishedAfter = "", locale = "us", language = "en") {
        //Example response
        /*
            {
    "meta": {
      "found": 3571,
      "returned": 3,
      "limit": 3,
      "page": 1
    },
    "data": [
      {
         "uuid": "df4ad427-a672-4c67-b6c6-6f81aa00e164",
         "title": "Tesla stock jumps after announcement it will join S&P 500 in one go",
         "description": "Tesla's stock price surged early Tuesday after the company b...",
         "keywords": "Business, s&p 500, stocks, tesla",
         "snippet": "Tesla’s stock price surged early Tuesday after the company...",
         "url": "https://nypost.com/2020/12/01/tesla-stock-jumps-on-news-it-will-join-sp-500-in-one-shot/",
         "image_url": "https://nypost.com/wp-content/uploads/sites/2/2020/12/tesla-52.jpg?quality=90&strip=all&w=1200",
         "language": "en",
         "published_at": "2020-12-01T14:35:46.000000Z",
         "source": "nypost.com",
         "categories": [
            "business"
         ],
         "relevance_score": 153.61266
      },
      {
         "uuid": "c9a23881-12dd-4005-8982-7b6552a2eb50",
         "title": "Tesla To Join S&P 500 With Full Market Cap On December 21",
         "description": "Tesla will be added to the S&P 500 index all at once at its ...",
         "keywords": "Tesla, S&P500, EV, Automotive, Stocks, Investing",
         "snippet": "Tesla (NASDAQ: TSLA) will be added to the S&P 500 index all ...",
         "url": "https://oilprice.com/Latest-Energy-News/World-News/Tesla-To-Join-SP-500-With-Full-Market-Cap-On-December-21.html",
         "image_url": "https://d32r1sh890xpii.cloudfront.net/news/718x300/2020-12-01_xwjdajwctl.jpg",
         "language": "en",
         "published_at": "2020-12-01T16:30:00.000000Z",
         "source": "oilprice.com",
         "categories": [
            "general",
            "business"
         ],
         "relevance_score": 146.92773
      },
      {
         "uuid": "18afdb1c-7742-4016-bf8c-a2f114e11199",
         "title": "Tesla to Enter S&P 500 at Full Weight in December",
         "description": "The electric-vehicle maker will be added to the broad stock-...",
         "keywords": "Motor Vehicles, Alternative Fuel Vehicles, Trusts Funds Financial Vehicles, Diversified Holding Companies, Automotive",
         "snippet": "S&P Dow Jones Indices said it will add Tesla Inc.’s full w...",
         "url": "https://www.wsj.com/articles/tesla-to-enter-s-p-500-at-full-weight-in-december-11606780897?mod=pls_whats_news_us_business_f",
         "image_url": "https://images.wsj.net/im-265933/social",
         "language": "en",
         "published_at": "2020-12-01T00:01:00.000000Z",
         "source": "online.wsj.com",
         "categories": [
            "business"
         ],
         "relevance_score": 128.22346
      }
    ]
    }
        */

        if (this.turnOnApiCalls) {
            let url = `${SERVER_URL}similar/${uuid}?locale=${locale}&language=${language}&api_token=${API_TOKEN}`;
            url += categories == "" ? "" : `&categories=${categories}`;
            url += publishedOn == "" ? "" : `&published_on=${publishedOn}`;
            url += publishedBefore == "" ? "" : `&published_before=${publishedBefore}`;
            url += publishedAfter == "" ? "" : `&published_after=${publishedAfter}`;
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the similarNews call", response);
                        return response.json()
                    }
                })
                .catch(err => {
                    this.debug.error("similarNews", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }
    async newsByUUID(uuid) {
        //Example response
        /*
        {
            "uuid": "147013d8-6c2c-4d50-8bad-eb3c8b7f5740",
            "title": "These Are The Four American Companies Worth Over $1 Trillion Each – 24",
            "description": "America’s major market indexes set records in the early pa...",
            "keywords": "",
            "snippet": "These Are The Four American Companies Worth Over $1 Trillion...",
            "url": "https://247wallst.com/investing/2020/10/17/these-are-the-four-american-companies-worth-over-1-trillion-each/",
            "image_url": "https://247wallst.com/wp-content/uploads/2020/08/imageForEntry2-Qrj.jpg",
            "language": "en",
            "published_at": "2020-10-17T11:16:20.000000Z",
            "source": "247wallst.com",
            "categories": [
                "business"
            ]
        }
        */

        if (this.turnOnApiCalls) {
            const url = `${SERVER_URL}uuid/${uuid}?api_token=${API_TOKEN}`;
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the newsByUUID call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("newsByUUID", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }
    async fetchArticle(article) {
        //Example response
        /*
        {
       "data":{
          "publish_date": "2022-09-12 14:00:05+00:00",
          "source_url":"https://edition.cnn.com",
          "url":"https://edition.cnn.com/2022/09/12/world/james-webb-space-telescope-image-orion-nebula-scn/index.html",
          "canonical_link":"https://www.cnn.com/2022/09/12/world/james-webb-space-telescope-image-orion-nebula-scn/index.html",
          "title":"'Breathtaking' Webb images to reveal the secrets of star birth",
          "top_image":"https://media.cnn.com/api/v1/images/stellar/prod/220912095026-01-james-webb-space-telescope-orion-nebula.jpg?q=w_800,c_fill",
          "images":[
             "https://media.cnn.com/api/v1/images/stellar/prod/220912095043-03-james-webb-space-telescope-orion-nebula.jpg?c=16x9&q=h_270,w_480,c_fill",
             "https://media.cnn.com/api/v1/images/stellar/prod/220912095026-01-james-webb-space-telescope-orion-nebula.jpg?c=16x9&q=h_270,w_480,c_fill",
             "https://media.cnn.com/api/v1/images/stellar/prod/150825105557-spacescience-logo-large-169.png?q=h_249,w_650,x_0,y_0/w_1280",
             "https://media.cnn.com/api/v1/images/stellar/prod/150103074330-hubble-space-background-2-full-169.jpg?q=w_1600,h_900,x_0,y_0,c_crop/h_270,w_480",
             "https://media.cnn.com/api/v1/images/stellar/prod/141217021344-katie-hunt.jpg?c=16x9&q=h_270,w_480,c_fill/c_thumb,g_face,w_100,h_100",
             "https://media.cnn.com/api/v1/images/stellar/prod/220912095026-01-james-webb-space-telescope-orion-nebula.jpg?q=w_800,c_fill"
          ],
          "videos":[],
          "text":"CNN —
    
                “Breathtaking” images of a stellar nursery in the Orion Nebula taken by the James Webb Space Telescope are revealing intricate details about how stars and planetary systems form.
    
                The images, released Monday, shed light on an environment similar to our own solar system when it formed more than 4.5 billion years ago. Observing the Orion Nebula will help space scientists better understand what happened during the first million years of the Milky Way’s planetary evolution, said Western University astrophysicist Els Peeters in a news release.
    
                “We are blown away by the breathtaking images of the Orion Nebula. We started this project in 2017, so we have been waiting more than five years to get these data,” Peeters said.
    
                “These new observations allow us to better understand how massive stars transform the gas and dust cloud in which they are born,” Peeters added.
    
                The inner region of the Orion Nebula as seen by the James Webb Space Telescope's NIRCam instrument. NASA/ESA/CSA/PDRS4all
    
                The hearts of stellar nurseries like the Orion Nebula are obscured by large amounts of stardust, making it impossible to study what is happening inside with instruments like the Hubble Space Telescope, which rely mainly on visible light.
    
                Webb, however, detects the infrared light of the cosmos, which allows observers to see through these layers of dust, revealing the action happening deeply inside the Orion Nebula, the release said. The images are the most detailed and sharpest taken of the nebula – which is situated in the Orion constellation 1,350 light-years away from Earth – and the latest offering from the Webb telescope, which began operating in July.
    
                “Observing the Orion Nebula was a challenge because it is very bright for Webb’s unprecedented sensitive instruments. But Webb is incredible, Webb can observe distant and faint galaxies, as well as Jupiter and Orion, which are some of the brightest sources in the infrared sky,” said research scientist Olivier Berné at CNRS, the French National Center for Scientific Research, in the news release.
    
                The new images reveal numerous structures inside the nebula, including proplyds – a central protostar surrounded by a disk of dust and gas in which planets form.
    
                “We have never been able to see the intricate fine details of how interstellar matter is structured in these environments, and to figure out how planetary systems can form in the presence of this harsh radiation. These images reveal the heritage of the interstellar medium in planetary systems,” said Emilie Habart, an associate professor at Institut d’Astrophysique Spatiale (IAS) in France.
    
                Also clearly visible at the heart of the Orion Nebula is the trapezium cluster of young massive stars that shape the cloud of dust and gas with their intense ultraviolet radiation, according to the news release. Understanding how this radiation impacts the cluster’s surroundings is key to understanding the formation of stellar systems.
    
                “Massive young stars emit large quantities of ultraviolet radiation directly into the native cloud that still surrounds them, and this changes the physical shape of the cloud as well as its chemical makeup. How precisely this works, and how it affects further star and planet formation is not yet well known,” Peeters said.
    
                The images will be studied by an international collaboration of more than 100 scientists in 18 countries known as PDRs4All.",
          "tags":[],
          "authors":[
             "Katie Hunt"
          ],
          "meta_image":"https://media.cnn.com/api/v1/images/stellar/prod/220912095026-01-james-webb-space-telescope-orion-nebula.jpg?q=w_800,c_fill",
          "meta_description":"""Breathtaking"" images of a stellar nursery in the Orion Nebula taken by the James Webb Space Telescope are revealing intricate details about how stars and planetary systems form.",
          "meta_keywords":[
             "celestial bodies and objects",
             "planets and moons",
             "space and astronomy",
             "science"
          ],
          "meta_lang":"en",
          "meta_favicon":"/media/sites/cnn/favicon.ico",
          "meta_site_name":"CNN",
          "meta_data":{
             "viewport":"width=device-width,initial-scale=1,shrink-to-fit=no",
             "og":{
                "title":"New 'breathtaking' Webb images to reveal the secrets of star birth | CNN",
                "description":"""Breathtaking"" images of a stellar nursery in the Orion Nebula taken by the James Webb Space Telescope are revealing intricate details about how stars and planetary systems form.",
                "image":"https://media.cnn.com/api/v1/images/stellar/prod/220912095026-01-james-webb-space-telescope-orion-nebula.jpg?q=w_800,c_fill",
                "type":"article",
                "url":"https://www.cnn.com/2022/09/12/world/james-webb-space-telescope-image-orion-nebula-scn/index.html",
                "site_name":"CNN"
             },
             "twitter":{
                "title":"New 'breathtaking' Webb images to reveal the secrets of star birth | CNN",
                "description":"""Breathtaking"" images of a stellar nursery in the Orion Nebula taken by the James Webb Space Telescope are revealing intricate details about how stars and planetary systems form.",
                "image":"https://media.cnn.com/api/v1/images/stellar/prod/220912095026-01-james-webb-space-telescope-orion-nebula.jpg?q=w_800,c_fill",
                "card":"summary_large_image",
                "site":"@CNN"
             },
             "description":"""Breathtaking"" images of a stellar nursery in the Orion Nebula taken by the James Webb Space Telescope are revealing intricate details about how stars and planetary systems form.",
             "template_type":"article_leaf",
             "type":"article",
             "meta-section":"world",
             "meta-branding":"space-and-science",
             "theme":"world",
             "article":{
                "published_time":"2022-09-12T14:00:05Z",
                "modified_time":"2022-09-12T14:26:58Z",
                "tag":"celestial bodies and objects, planets and moons, space and astronomy, science",
                "publisher":"https://www.facebook.com/CNN"
             },
             "keywords":"celestial bodies and objects, planets and moons, space and astronomy, science",
             "author":"Katie Hunt",
             "fb":{
                "app_id":80401312489
             }
          },
          "html":null
       }
    }
        */

        if (this.turnOnApiCalls) {
            const url = `${ARTICLE_URL}?url=${article}&api_token=${ARTICLE_TOKEN}`;
            const returnArticle = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the fetchArticle call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("fetchArticle", err);
                })
            return returnArticle;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }


}



