import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheImageService {
  private cacheName = 'image-cache';

  constructor() {
    // Precargar la imagen en caché cuando se inicie la app
    this.cacheImage('../../../assets/images/author-200px.png');
  }

  async cacheImage(imageUrl: string): Promise<void> {
    try {
      const cache = await caches.open(this.cacheName);
      const cachedResponse = await cache.match(imageUrl);

      if (!cachedResponse) {
        const response = await fetch(imageUrl);
        if (response.ok) {
          await cache.put(imageUrl, response.clone());
          // console.log(`Imagen almacenada en caché: ${imageUrl}`);
        } else {
          // console.error('No se pudo descargar la imagen:', response.statusText);
        }
      } else {
        // console.log(`Imagen ya estaba en caché: ${imageUrl}`);
      }
    } catch (error) {
      console.error('Error en la caché de imágenes:', error);
    }
  }

  async getCachedImage(imageUrl: string): Promise<string | null> {
    try {
      const cache = await caches.open(this.cacheName);
      const cachedResponse = await cache.match(imageUrl);
      if (cachedResponse) {
        // console.log(`Imagen obtenida desde caché: ${imageUrl}`);
        return imageUrl;
      }
      // console.log(`Imagen no encontrada en caché: ${imageUrl}`);
      return null;
    } catch (error) {
      console.error('Error al obtener imagen de caché:', error);
      return null;
    }
  }
}
