import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleriaModule, ImageModule, DividerModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images: any[] = [
    {
        previewImageSrc:
'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200/50',
        thumbnailImageSrc:
'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200',
        title: 'AI Development Services',
    },
    {
        previewImageSrc:
'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=200/100',
        thumbnailImageSrc:
'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=200',
       
        title: 'Natural Learning Processing',
    },
    
    {
      previewImageSrc:
'https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=200/100',
      thumbnailImageSrc:
'https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=200',
    
      title: 'Custom AI Solutions',
  },
  {
      previewImageSrc:
'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200/100',
      thumbnailImageSrc:
'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200',
     
      title: 'Machine Learning Algorithm',
  },
  {
    previewImageSrc:
'https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-adapt-to-an-infinite-amount-of-uses-it-was-created-by-nidia-dias-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=200/100',
    thumbnailImageSrc:
'https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-adapt-to-an-infinite-amount-of-uses-it-was-created-by-nidia-dias-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=200',
  
    title: 'AI Integration',
},
{
    previewImageSrc:
'https://images.pexels.com/photos/17485706/pexels-photo-17485706/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-visualises-the-input-and-output-of-neural-networks-and-how-ai-systems-perceive-data-it-was-created-by-rose-pilkington.png?auto=compress&cs=tinysrgb&w=200/100',
    thumbnailImageSrc:
'https://images.pexels.com/photos/17485706/pexels-photo-17485706/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-visualises-the-input-and-output-of-neural-networks-and-how-ai-systems-perceive-data-it-was-created-by-rose-pilkington.png?auto=compress&cs=tinysrgb&w=200',
   
    title: 'Machine Learning Algorithm',
},
];

}
