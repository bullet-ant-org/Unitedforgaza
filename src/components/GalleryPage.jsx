import React from 'react';

// --- Image Variables (Placeholder URLs) ---
const images = [
  'https://articles.unesco.org/sites/default/files/2024-05/Children%20at%20group%20MHPSS%20activity_GazaStrip_C.%20UNESCO_Hussein%20Isleh.jpg',
  'https://assets.nationbuilder.com/dcipalestine/pages/8727/attachments/original/1742320197/001_gaza_hero.jpg?1742320197',
  'https://media.npr.org/assets/img/2023/11/10/gettyimages-1755788246_custom-7e01225eb0c26b87db12a36e0244339b23726d94.jpg',
  'https://media.newyorker.com/photos/65fa0aa31d01ccbd0f31f642/2:2/w_2560%2Cc_limit/Griswold-Child-Amputees-1.jpg',
  'https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/Embargoed/25-06-2025-UNICEF-Gaza-04.jpg/image1170x530cropped.jpg',
  'https://turkiye.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2024-03/gazamarch24.jpeg?itok=2Ql94LnF',
  'https://static.euronews.com/articles/stories/08/01/49/58/1536x864_cmsv2_f5a5925e-2775-5883-9e1b-0addf5050ab4-8014958.jpg',
  'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa02dea9b-5f4b-4ec9-82f0-e9561c333652.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1',
  'https://i.abcnewsfe.com/a/ec8edf1e-306a-4f80-9286-bff5d19162b7/israel-gaza-7-rt-gmh-240628_1719577574862_hpMain.jpg',
  'https://www.ifpri.org/wp-content/uploads/2024/10/gaza-kids-scaled.jpg',
  'https://assets.nationbuilder.com/dcipalestine/pages/5873/attachments/original/1709831049/001_hero_starvation.jpg?1709831049',
  'https://static01.nyt.com/images/2023/11/14/multimedia/00Gaza-Children-PROMO/00Gaza-Children-PROMO-mediumSquareAt3X.jpg',
  'https://plan-international.org/tachyon/2024/12/202409-PSE-09_scr.jpg',
  'https://media.cnn.com/api/v1/images/stellar/prod/photo-4-20240228085711403.jpeg?c=original',
  'https://i.guim.co.uk/img/media/b167134e1ba1a965ca0f1cc1dddc498e191e59f7/1000_0_5000_4000/master/5000.jpg?width=465&dpr=1&s=none&crop=none',
  'https://euromedmonitor.org/uploads/B02AD7AD-13EC-4CC0-9A79-3AB89208D8FA.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94o1-14wg48XTRQL9n9o3SJrTZMu8xIfEQA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Zq9DzUg0GuZv7LV5C9v1pe1wfmHgJEwPmQ&s',
  'https://images.theconversation.com/files/556655/original/file-20231030-29-emhiqz.jpg?ixlib=rb-4.1.0&rect=20%2C20%2C6689%2C4446&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
  'https://img.etimg.com/thumb/width-1200,height-900,imgsize-120830,resizemode-75,msid-121766957/news/international/world-news/36-palestinians-killed-trying-to-obtain-desperately-needed-aid-in-gaza-officials-say.jpg',
  'https://tdh.rokka.io/tdh_desktop_hero/7a3ac3d036b26da849e5b33617298dd81d241051/dsc-3804.jpg?h=89e9ea70&itok=AbkFCCe9',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_4yne1Hn-z5f9F3nnj5cDa18zcFMI9BDMaDWHwnx2g1ygVmDnOJJibyc17LGD96o6FY&usqp=CAU',
  'https://www.savethechildren.net/sites/default/files/shorthand/stories/2XDsUqAt9Z/2024-10-01T10%3A00%3A42.166Z/assets/tdy7jrBikF/clean-16x9-gaza-6-month-video_2024-frame-0ms-1920x1080.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDGBPBMg-bo73m-xyHHhtMfkDA_MDzv1JAw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgReORHC4BA_goxwYmgZb77dvwowQYCDjkQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxxgftHkPp_RCyrnyuNl4NkUQ3Wul1KsZAg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNdFnwmngBplD62EMRDbYx9qIzLykimh1DA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCi-L4EEli3dAINiXHKIBY0YlgYQeFNCC8Zw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlckkT0v9meOmV8iaT0TYZZ6is75h7tnsctQ&s',
  'https://cdnuploads.aa.com.tr/uploads/Contents/2023/11/20/thumbs_b_c_24da7c1dacf648f9cf94b7b77a21cb10.jpg?v=194002',
];

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h1>Photo Gallery</h1>
      <p>A collection of images showcasing our work and impact.</p>
      <div className="image-grid">
        {images.map((src, index) => (
          <div key={index} className="image-container">
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;