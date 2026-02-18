import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DocBanner() {
  const bannerUrl = useBaseUrl('/img/ai-banner.png');

  return (
    <div style={{marginBottom: '2rem'}}>
      <img
        src={bannerUrl}
        alt="imEDA Banner"
        style={{width: '100%', borderRadius: '12px'}}
      />
    </div>
  );
}
