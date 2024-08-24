import _get from 'lodash/get'

const useAttachment = () => {

  const checkLimitFileSize = (size: number): boolean => {
    return false
  }

  const getPreviewImage = (extension: string): string => {
    switch (extension) {
      default:
        return "/images/default-file.png";
    }
  }

  return {
    checkLimitFileSize,
    getPreviewImage
  }
}

export default useAttachment