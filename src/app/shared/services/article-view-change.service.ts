import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleViewChangeService {
  
  cssParentProperties = {};
  cssChildPropertiesData = {};
  cssChildPropertiesDataText = {};
  cssButtonChange = {}
  
  // Tile Styles //
  viewTile ={
    'componentParent':{
      display: 'grid',
      marginBottom: '75px',
      gridTemplateColumns: '1fr 1fr',
      columnGap: '30px',
    },
    
    'componentChild':{
      'containerData':{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'start',
        paddingBottom: '1.5em'
      },
      'containerDataText':{
        paddingTop: '1.5em',
      }
    }
  }

  // Row Styles //
  viewRow ={
    'reset':{}
  }

  updateTileCssProperties(){
    this.cssParentProperties = this.viewTile.componentParent;
    this.cssChildPropertiesData = this.viewTile.componentChild.containerData;
    this.cssChildPropertiesDataText = this.viewTile.componentChild.containerDataText;
  }

  updateRowCssProperties(){
    this.cssParentProperties = this.viewRow.reset ;
    this.cssChildPropertiesData = this.viewRow.reset ;
    this.cssChildPropertiesDataText = this.viewRow.reset ;
  }
}