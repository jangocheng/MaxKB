import { h } from 'vue'
export const iconMap: any = {
  '404': {
    iconReader: () => {
      return h('el-icon', { style: 'display:flex' }, [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            style: 'height:14px;width:14px',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M260.266667 789.333333c-21.333333 0-38.4-17.066667-38.4-38.4v-59.733333H38.4c-12.8 0-29.866667-8.533333-34.133333-21.333333-4.266667-17.066667-4.266667-29.866667 4.266666-42.666667l221.866667-294.4c8.533333-12.8 25.6-17.066667 42.666667-12.8 17.066667 4.266667 25.6 21.333333 25.6 38.4v256h34.133333c21.333333 0 38.4 17.066667 38.4 38.4s-17.066667 38.4-38.4 38.4H298.666667v59.733333c0 21.333333-17.066667 38.4-38.4 38.4z m-145.066667-179.2h106.666667V469.333333l-106.666667 140.8zM913.066667 742.4c-21.333333 0-38.4-17.066667-38.4-38.4v-59.733333h-183.466667c-12.8 0-29.866667-8.533333-34.133333-21.333334-8.533333-12.8-4.266667-29.866667 4.266666-38.4l221.866667-294.4c8.533333-12.8 25.6-17.066667 42.666667-12.8 17.066667 4.266667 25.6 21.333333 25.6 38.4v256h34.133333c21.333333 0 38.4 17.066667 38.4 38.4s-17.066667 38.4-38.4 38.4h-34.133333v59.733334c0 17.066667-17.066667 34.133333-38.4 34.133333zM768 567.466667h106.666667V426.666667L768 567.466667zM533.333333 597.333333c-46.933333 0-85.333333-25.6-119.466666-68.266666-29.866667-38.4-42.666667-93.866667-42.666667-145.066667 0-55.466667 17.066667-106.666667 42.666667-145.066667 29.866667-42.666667 72.533333-68.266667 119.466666-68.266666 46.933333 0 85.333333 25.6 119.466667 68.266666 29.866667 38.4 42.666667 93.866667 42.666667 145.066667 0 55.466667-17.066667 106.666667-42.666667 145.066667-34.133333 46.933333-76.8 68.266667-119.466667 68.266666z m0-362.666666c-55.466667 0-98.133333 68.266667-98.133333 149.333333s46.933333 149.333333 98.133333 149.333333c55.466667 0 98.133333-68.266667 98.133334-149.333333s-46.933333-149.333333-98.133334-149.333333z',
              fill: '#978CFF'
            }),
            h('path', {
              d: 'M354.133333 691.2a162.133333 21.333333 0 1 0 324.266667 0 162.133333 21.333333 0 1 0-324.266667 0Z',
              fill: '#E3E5FC'
            }),
            h('path', {
              d: 'M8.533333 832a162.133333 21.333333 0 1 0 324.266667 0 162.133333 21.333333 0 1 0-324.266667 0Z',
              fill: '#E3E5FC'
            }),
            h('path', {
              d: 'M661.333333 797.866667a162.133333 21.333333 0 1 0 324.266667 0 162.133333 21.333333 0 1 0-324.266667 0Z',
              fill: '#E3E5FC'
            })
          ]
        )
      ])
    }
  },
  home: {
    iconReader: () => {
      return h('el-icon', { style: 'display:flex' }, [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            style: 'height:14px;width:14px',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M362.666667 895.914667V639.850667c0-36.266667 33.109333-63.850667 72.533333-63.850667h153.6c39.253333 0 72.533333 27.648 72.533333 63.850667v256.064h59.904c61.269333 0 110.762667-47.957333 110.762667-106.730667V414.165333L557.162667 139.328a63.808 63.808 0 0 0-90.325334 0L192 414.165333v375.018667c0 58.88 49.386667 106.730667 110.762667 106.730667H362.666667z m42.666666 0h213.333334V639.850667c0-10.709333-12.586667-21.184-29.866667-21.184h-153.6c-17.408 0-29.866667 10.389333-29.866667 21.184v256.064z m469.333334-439.082667v332.352c0 82.645333-68.885333 149.397333-153.429334 149.397333H302.762667C218.133333 938.581333 149.333333 871.936 149.333333 789.184V456.832l-27.584 27.584a21.333333 21.333333 0 1 1-30.165333-30.165333L436.672 109.162667a106.474667 106.474667 0 0 1 150.656 0l345.088 345.088a21.333333 21.333333 0 0 1-30.165333 30.165333L874.666667 456.832z',
              fill: '#666666'
            })
          ]
        )
      ])
    }
  },
  app: {
    iconReader: () => {
      return h('el-icon', { style: 'display:flex' }, [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            style: 'height:14px;width:14px',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M906.62890625 212.8203125C906.62890625 161.58007812 865.05664063 120.0078125 813.81640625 120.0078125H645.2421875C594.00195313 120.0078125 552.4296875 161.58007812 552.4296875 212.8203125v168.57421875c0 51.24023438 41.57226563 92.8125 92.8125 92.8125h168.57421875c51.24023438 0 92.8125-41.57226563 92.8125-92.8125V212.8203125z m-56.25 173.93554688c0 17.05078125-28.125 31.20117188-45.26367188 31.20117187H640.3203125c-17.05078125 0-30.76171875-14.0625-30.76171875-31.20117188V207.81054687c0-17.05078125 13.7109375-30.67382813 30.76171875-30.67382812h178.9453125c17.05078125 0 31.02539063 13.62304688 31.02539063 30.67382813v178.94531249z m56.25 251.45507812c0-51.24023438-41.57226563-92.8125-92.8125-92.8125H645.2421875C594.00195313 545.3984375 552.4296875 586.97070313 552.4296875 638.2109375v168.57421875c0 51.24023438 41.57226563 92.8125 92.8125 92.8125h168.57421875c51.24023438 0 92.8125-41.57226563 92.8125-92.8125V638.2109375z m-56.25 173.3203125c0 17.05078125-13.88671875 30.9375-30.9375 30.9375H640.49609375c-17.05078125 0-30.9375-13.88671875-30.9375-30.9375V632.5859375c0-17.05078125 13.88671875-30.9375 30.9375-30.9375h178.9453125c17.05078125 0 30.9375 13.88671875 30.9375 30.9375v178.9453125zM468.0546875 638.2109375c0-51.24023438-41.57226563-92.8125-92.8125-92.8125H206.66796875C155.42773437 545.3984375 113.85546875 586.97070313 113.85546875 638.2109375v168.57421875C113.85546875 858.02539063 155.42773437 899.59765625 206.66796875 899.59765625h168.57421875c51.24023438 0 92.8125-41.57226563 92.8125-92.8125V638.2109375z m-57.12890625 173.3203125c0 17.05078125-13.88671875 30.9375-30.9375 30.9375H201.04296875c-17.05078125 0-30.9375-13.88671875-30.9375-30.9375V632.5859375c0-17.05078125 13.88671875-30.9375 30.9375-30.9375h178.9453125c17.05078125 0 30.9375 13.88671875 30.9375 30.9375v178.9453125z m57.12890625-598.7109375C468.0546875 161.58007812 426.48242187 120.0078125 375.2421875 120.0078125H206.66796875C155.42773437 120.0078125 113.85546875 161.58007812 113.85546875 212.8203125v168.57421875C113.85546875 432.63476562 155.42773437 474.20703125 206.66796875 474.20703125h168.57421875c51.24023438 0 92.8125-41.57226563 92.8125-92.8125V212.8203125z m-57.12890625 174.19921875c0 17.05078125-13.88671875 30.9375-30.9375 30.9375H201.04296875c-17.05078125 0-30.9375-13.88671875-30.9375-30.9375V208.07421875c0-17.05078125 13.88671875-30.9375 30.9375-30.9375h178.9453125c17.05078125 0 30.9375 13.88671875 30.9375 30.9375v178.9453125z',
              fill: '#768696'
            })
          ]
        )
      ])
    }
  },
  dataset: {
    iconReader: () => {
      return h('el-icon', { style: 'display:flex' }, [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            style: 'height:14px;width:14px',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M859.5 193H446.939c-1.851-53.25-45.747-96-99.439-96h-183C109.635 97 65 141.635 65 196.5v632c0 54.864 44.635 99.5 99.5 99.5h695c54.864 0 99.5-44.636 99.5-99.5v-536c0-54.865-44.636-99.5-99.5-99.5z m-695-33h183c20.126 0 36.5 16.374 36.5 36.5v28c0 17.397 14.103 31.5 31.5 31.5h444c20.126 0 36.5 16.374 36.5 36.5V321H128V196.5c0-20.126 16.374-36.5 36.5-36.5z m695 705h-695c-20.126 0-36.5-16.374-36.5-36.5V384h768v444.5c0 20.126-16.374 36.5-36.5 36.5z',
              fill: '#070102'
            })
          ]
        )
      ])
    }
  },
  setting: {
    iconReader: () => {
      return h('el-icon', { style: 'display:flex' }, [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            style: 'height:14px;width:14px',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M512 328c-100.8 0-184 83.2-184 184S411.2 696 512 696 696 612.8 696 512 612.8 328 512 328z m0 320c-75.2 0-136-60.8-136-136s60.8-136 136-136 136 60.8 136 136-60.8 136-136 136z',
              fill: '#070102'
            }),
            h('path', {
              d: 'M857.6 572.8c-20.8-12.8-33.6-35.2-33.6-60.8s12.8-46.4 33.6-60.8c14.4-9.6 20.8-27.2 16-44.8-8-27.2-19.2-52.8-32-76.8-8-14.4-25.6-24-43.2-19.2-24 4.8-48-1.6-65.6-19.2-17.6-17.6-24-41.6-19.2-65.6 3.2-16-4.8-33.6-19.2-43.2-24-14.4-51.2-24-76.8-32-16-4.8-35.2 1.6-44.8 16-12.8 20.8-35.2 33.6-60.8 33.6s-46.4-12.8-60.8-33.6c-9.6-14.4-27.2-20.8-44.8-16-27.2 8-52.8 19.2-76.8 32-14.4 8-24 25.6-19.2 43.2 4.8 24-1.6 49.6-19.2 65.6-17.6 17.6-41.6 24-65.6 19.2-16-3.2-33.6 4.8-43.2 19.2-14.4 24-24 51.2-32 76.8-4.8 16 1.6 35.2 16 44.8 20.8 12.8 33.6 35.2 33.6 60.8s-12.8 46.4-33.6 60.8c-14.4 9.6-20.8 27.2-16 44.8 8 27.2 19.2 52.8 32 76.8 8 14.4 25.6 22.4 43.2 19.2 24-4.8 49.6 1.6 65.6 19.2 17.6 17.6 24 41.6 19.2 65.6-3.2 16 4.8 33.6 19.2 43.2 24 14.4 51.2 24 76.8 32 16 4.8 35.2-1.6 44.8-16 12.8-20.8 35.2-33.6 60.8-33.6s46.4 12.8 60.8 33.6c8 11.2 20.8 17.6 33.6 17.6 3.2 0 8 0 11.2-1.6 27.2-8 52.8-19.2 76.8-32 14.4-8 24-25.6 19.2-43.2-4.8-24 1.6-49.6 19.2-65.6 17.6-17.6 41.6-24 65.6-19.2 16 3.2 33.6-4.8 43.2-19.2 14.4-24 24-51.2 32-76.8 4.8-17.6-1.6-35.2-16-44.8z m-56 92.8c-38.4-6.4-76.8 6.4-104 33.6-27.2 27.2-40 65.6-33.6 104-17.6 9.6-36.8 17.6-56 24-22.4-30.4-57.6-49.6-97.6-49.6-38.4 0-73.6 17.6-97.6 49.6-19.2-6.4-38.4-14.4-56-24 6.4-38.4-6.4-76.8-33.6-104-27.2-27.2-65.6-40-104-33.6-9.6-17.6-17.6-36.8-24-56 30.4-22.4 49.6-57.6 49.6-97.6 0-38.4-17.6-73.6-49.6-97.6 6.4-19.2 14.4-38.4 24-56 38.4 6.4 76.8-6.4 104-33.6 27.2-27.2 40-65.6 33.6-104 17.6-9.6 36.8-17.6 56-24 22.4 30.4 57.6 49.6 97.6 49.6 38.4 0 73.6-17.6 97.6-49.6 19.2 6.4 38.4 14.4 56 24-6.4 38.4 6.4 76.8 33.6 104 27.2 27.2 65.6 40 104 33.6 9.6 17.6 17.6 36.8 24 56-30.4 22.4-49.6 57.6-49.6 97.6 0 38.4 17.6 73.6 49.6 97.6-6.4 19.2-14.4 38.4-24 56z',
              fill: '#070102'
            })
          ]
        )
      ])
    }
  },
  password: {
    iconReader: () => {
      return h('el-icon', { style: 'display:flex' }, [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            style: 'height:14px;width:14px',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M807.28626 393.9647l-59.057047 0 0-78.729086c0-130.193201-105.96438-236.099253-236.229213-236.099253S275.770787 185.042413 275.770787 315.235614l0 78.729086-59.057047 0c-32.616862 0-59.057047 26.425859-59.057047 59.025325L157.656693 885.838314c0 32.598442 26.441209 59.025325 59.057047 59.025325l590.57252 0c32.616862 0 59.057047-26.425859 59.057047-59.025325L866.343307 452.989001C866.343307 420.390559 839.903122 393.9647 807.28626 393.9647zM334.827835 315.235614c0-97.644901 79.473029-177.074951 177.172165-177.074951s177.172165 79.43005 177.172165 177.074951l0 78.729086L334.827835 393.9647 334.827835 315.235614zM807.28626 885.838314 216.71374 885.838314 216.71374 452.989001l590.57252 0L807.28626 885.838314z'
            }),
            h('path', {
              d: 'M512 777.635963c16.302291 0 29.528524-13.219069 29.528524-29.512151L541.528524 590.723969c0-16.293081-13.226233-29.512151-29.528524-29.512151s-29.528524 13.219069-29.528524 29.512151l0 157.399843C482.471476 764.416893 495.697709 777.635963 512 777.635963z'
            })
          ]
        )
      ])
    }
  },
  exit: {
    iconReader: () => {
      return h('el-icon', { style: 'display:flex' }, [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            style: 'height:14px;width:14px',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M874.666667 855.744a19.093333 19.093333 0 0 1-19.136 18.922667H168.469333A19.2 19.2 0 0 1 149.333333 855.530667V168.469333A19.2 19.2 0 0 1 168.469333 149.333333h687.061334c10.581333 0 19.136 8.533333 19.136 18.922667V320h42.666666V168.256A61.717333 61.717333 0 0 0 855.530667 106.666667H168.469333A61.866667 61.866667 0 0 0 106.666667 168.469333v687.061334A61.866667 61.866667 0 0 0 168.469333 917.333333h687.061334A61.76 61.76 0 0 0 917.333333 855.744V704h-42.666666v151.744zM851.84 533.333333l-131.797333 131.754667a21.141333 21.141333 0 0 0 0.213333 29.973333 21.141333 21.141333 0 0 0 29.973333 0.192l165.589334-165.589333a20.821333 20.821333 0 0 0 6.122666-14.976 21.44 21.44 0 0 0-6.314666-14.997333l-168.533334-168.533334a21.141333 21.141333 0 0 0-29.952-0.213333 21.141333 21.141333 0 0 0 0.213334 29.973333L847.296 490.666667H469.333333v42.666666h382.506667z'
            })
          ]
        )
      ])
    }
  }
}