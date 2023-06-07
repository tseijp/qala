export const DefsFilter = () => (
  <defs>
    <filter id="filter" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="BLUR" />
      <feSpecularLighting
        in="BLUR"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="20"
        lightingColor="white"
        result="SPECULAR"
      >
        <fePointLight x="-5000" y="-10000" z="20000" />
      </feSpecularLighting>
      <feComposite
        in="SPECULAR"
        in2="SourceGraphic"
        operator="in"
        result="COMPOSITE"
      />
      <feMerge>
        <feMergeNode in="COMPOSITE" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
)
