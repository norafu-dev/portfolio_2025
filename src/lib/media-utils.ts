import { Media } from "../../payload-types";

/**
 * 获取媒体文件的正确URL，自动处理本地和生产环境的差异
 */
export function getMediaUrl(media: Media | string): string {
  // 如果传入的是字符串URL，直接处理
  if (typeof media === "string") {
    return processUrl(media);
  }

  // 如果是Media对象，使用url字段
  if (media?.url) {
    return processUrl(media.url);
  }

  // 降级处理
  return "";
}

/**
 * 处理URL，确保本地和生产环境都能正确访问
 */
function processUrl(url: string): string {
  // 生产环境的Blob Storage URL，直接返回
  if (url.includes("blob.vercel-storage.com")) {
    return url;
  }

  // 处理本地开发的API路径
  if (url.startsWith("/api/media/file/")) {
    return url.replace("/api/media/file/", "/media/");
  }

  // 确保本地路径以/media/开头
  if (!url.startsWith("/media/") && !url.startsWith("http")) {
    return `/media/${url.replace(/^\/+/, "")}`;
  }

  return url;
}

/**
 * 获取缩略图URL
 */
export function getThumbnailUrl(media: Media): string {
  if (media.thumbnailURL) {
    return processUrl(media.thumbnailURL);
  }

  // 降级到普通URL
  return getMediaUrl(media);
}

/**
 * 检查是否为生产环境的远程URL
 */
export function isRemoteUrl(url: string): boolean {
  return url.includes("blob.vercel-storage.com") || url.startsWith("http");
}
