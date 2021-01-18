import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="is-loading">
        <Head>
          <link rel="shortcut icon" href="/favicons/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <svg id="svg--" width="0" height="0">
            <symbol id="svg-slider-arrow-l" viewBox="0 0 8 12">
              <polygon points="3,6 7.7,1.3 6.3,0 0.3,6 0.3,6 0.3,6 6.3,12 7.7,10.7" />
            </symbol>
            <symbol id="svg-slider-arrow-r" viewBox="0 0 8 12">
              <polygon points="5,6 0.3,10.7 1.7,12 7.7,6 7.7,6 7.7,6 1.7,0 0.3,1.3" />
            </symbol>
            <symbol id="svg-arrow" viewBox="203 1136.1 12 6.6">
              <path
                fill="none"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                d="M214.5 1136.7l-5.5 5-5.5-5"
              />
            </symbol>
            <symbol id="svg-logo" viewBox="0 0 40.87 45.52">
              <path
                d="M18.31,47.9c.36.31.8,1.18,1.35.32.33-.51,1.11-1.17.18-1.88-.23-.18-.44-.38-.65-.58-8.36-8-8-20.5.86-28.07.7-.6,1.82-1.17.88-2.24s-1.6,0-2.23.52a20.74,20.74,0,0,0-.39,31.93Zm8.29-32a5,5,0,0,0,3.71,5.45c.82.18,1.89.5,2.19-.69s-.58-1.25-1.44-1.44a2.62,2.62,0,0,1-2.27-3.17,2.71,2.71,0,0,1,3.13-2.4,14.81,14.81,0,0,1,3.65.5c1.19.39,1.43-.32,1.72-1,.45-1.11-.6-1-1.09-1.09-1.35-.3-2.72-.46-3.49-.58C29.09,11.39,26.93,13.14,26.6,15.9Zm18,.47c-1.27-1.06-1.5-1.77-.51-3.09a2.52,2.52,0,0,0-.64-4c-1.34-.92-3-.26-3.88,1.58q-10.37,20.79-20.7,41.6c-.3.61-1,1.37,0,1.84.81.38,1.07-.49,1.39-1l5.61-9.38q8-13.39,16-26.81c7.29,4.71,9.9,14.76,6,23a18,18,0,0,1-22.17,9.54c-1.14-.38-2-.52-2.33.77s.93,1.07,1.55,1.28a20.24,20.24,0,0,0,24.14-9.11A20.73,20.73,0,0,0,44.59,16.37ZM42.52,13c-.14.9-3.67,6.44-4.77,8-.11.16-.35.22-.52.32-.76-.26-.86-.71-.55-1.36,1.15-2.43,2.27-4.87,3.43-7.29a1.17,1.17,0,0,1,1.41-.77C42.05,12,42.6,12.43,42.52,13Z"
                transform="translate(-11 -8.9)"
              />
            </symbol>

            <symbol id="svg-arrow-long" viewBox="0 0 12 12">
              <path d="M8.2,8.9L6.7,8.8V0.5H5.3v8.3L3.8,8.9L6,11.8L8.2,8.9z" />
            </symbol>

            <symbol id="svg-social-hub" viewBox="0 0 32 32">
              <g transform="scale(0.666667)">
                <path fill="none" d="M0,0h48v48h-48Z" />
                <path d="M36,32.17c-1.52,0 -2.89,0.59 -3.93,1.54l-14.25,-8.31c0.11,-0.45 0.18,-0.92 0.18,-1.4c0,-0.48 -0.07,-0.95 -0.18,-1.4l14.1,-8.23c1.07,1 2.5,1.62 4.08,1.62c3.31,0 6,-2.69 6,-6c0,-3.31 -2.69,-6 -6,-6c-3.31,0 -6,2.69 -6,6c0,0.48 0.07,0.95 0.18,1.4l-14.1,8.23c-1.07,-1 -2.5,-1.62 -4.08,-1.62c-3.31,0 -6,2.69 -6,6c0,3.31 2.69,6 6,6c1.58,0 3.01,-0.62 4.08,-1.62l14.25,8.31c-0.1,0.42 -0.16,0.86 -0.16,1.31c0,3.22 2.61,5.83 5.83,5.83c3.22,0 5.83,-2.61 5.83,-5.83c0,-3.22 -2.61,-5.83 -5.83,-5.83Z" />
              </g>
            </symbol>

            <symbol id="svg-facebook" viewBox="1.53935 -51.8519 14 28">
              <path
                d="M16.0547,-53.3705v4.41964h-2.62835c-0.959821,0 -1.60714,0.200893 -1.94196,0.602679c-0.334821,0.401785 -0.502232,1.00446 -0.502232,1.80803v3.16406h4.90513l-0.652902,4.95536h-4.25223v12.7065h-5.12277v-12.7065h-4.26897v-4.95536h4.26897v-3.64955c0,-2.07589 0.580357,-3.68583 1.74107,-4.8298c1.16071,-1.14397 2.70647,-1.71596 4.63728,-1.71596c1.64062,0 2.91295,0.066965 3.81696,0.200893Z"
                transform="scale(0.967901)"
              />
            </symbol>

            <symbol id="svg-twitter" viewBox="0.893401 -51.9797 32 32">
              <path
                d="M27.1205,-40.3125c-0.747768,1.09375 -1.65179,2.02567 -2.71205,2.79576c0.011161,0.15625 0.016741,0.390625 0.016741,0.703125c0,1.45089 -0.212053,2.899 -0.636161,4.34431c-0.424107,1.44531 -1.06864,2.83203 -1.93359,4.16016c-0.864956,1.32812 -1.89453,2.50279 -3.08873,3.524c-1.1942,1.02121 -2.63393,1.83594 -4.3192,2.4442c-1.68527,0.608259 -3.48772,0.912389 -5.40737,0.912389c-3.02455,0 -5.79241,-0.809152 -8.30357,-2.42746c0.390625,0.044643 0.825893,0.066965 1.3058,0.066965c2.51116,0 4.74888,-0.77009 6.71317,-2.31027c-1.17188,-0.022322 -2.22098,-0.382255 -3.14732,-1.0798c-0.926339,-0.697545 -1.5625,-1.58761 -1.90848,-2.6702c0.368303,0.055803 0.708705,0.083705 1.02121,0.083705c0.479911,0 0.954241,-0.061384 1.42299,-0.184152c-1.25,-0.256696 -2.28516,-0.878906 -3.10547,-1.86663c-0.820312,-0.987723 -1.23047,-2.13449 -1.23047,-3.44029v-0.066965c0.758928,0.424107 1.57366,0.652902 2.4442,0.686384c-0.736607,-0.491071 -1.32254,-1.13281 -1.75781,-1.92522c-0.435268,-0.792411 -0.652902,-1.65179 -0.652902,-2.57812c0,-0.982143 0.245536,-1.89174 0.736607,-2.72879c1.35045,1.66295 2.99386,2.99386 4.93025,3.99275c1.93638,0.998884 4.00949,1.55413 6.21931,1.66574c-0.089286,-0.424107 -0.133929,-0.837053 -0.133929,-1.23884c0,-1.49554 0.527344,-2.77065 1.58203,-3.82534c1.05469,-1.05469 2.3298,-1.58203 3.82533,-1.58203c1.5625,0 2.87946,0.569197 3.95089,1.70759c1.21652,-0.234375 2.36049,-0.669642 3.43192,-1.3058c-0.412947,1.28348 -1.20536,2.27679 -2.37723,2.97991c1.03795,-0.111608 2.07589,-0.390625 3.11384,-0.837054Z"
                transform="scale(1.21286)"
              />
            </symbol>

            <symbol id="svg-youtube" viewBox="0.452009 -55.7143 24.8103 30">
              <path d="M16.2556,-34.8884v3.53237c0,0.747768 -0.217634,1.12165 -0.652901,1.12165c-0.256697,0 -0.507813,-0.122768 -0.753349,-0.368304v-5.03906c0.245536,-0.245536 0.496652,-0.368304 0.753349,-0.368304c0.435267,0 0.652901,0.373884 0.652901,1.12165Zm5.65848,0.016741v0.77009h-1.5067v-0.77009c0,-0.758928 0.251116,-1.13839 0.753348,-1.13839c0.502232,0 0.753348,0.379465 0.753348,1.13839Zm-16.1719,-3.64955h1.79129v-1.57366h-5.22321v1.57366h1.75781v9.52567h1.67411Zm4.82143,9.52567h1.48996v-8.27009h-1.48996v6.32812c-0.334821,0.46875 -0.652902,0.703125 -0.954241,0.703125c-0.200893,0 -0.31808,-0.117187 -0.351563,-0.351563c-0.01116,-0.033482 -0.016741,-0.228794 -0.016741,-0.585937v-6.09375h-1.48996v6.54576c0,0.546875 0.044643,0.954241 0.133929,1.2221c0.133928,0.412947 0.457589,0.61942 0.970982,0.61942c0.535714,0 1.10491,-0.340402 1.70759,-1.02121Zm7.18192,-2.47768v-3.29799c0,-0.814733 -0.050224,-1.36719 -0.15067,-1.65737c-0.189732,-0.625 -0.585937,-0.9375 -1.18862,-0.9375c-0.558036,0 -1.07701,0.301339 -1.55692,0.904017v-3.63281h-1.48996v11.0993h1.48996v-0.803571c0.502232,0.613839 1.02121,0.920759 1.55692,0.920759c0.602679,0 0.998884,-0.30692 1.18862,-0.920759c0.100446,-0.301339 0.15067,-0.859375 0.15067,-1.67411Zm5.65848,-0.167411v-0.217634h-1.52344c0,0.569197 -0.01116,0.909598 -0.033482,1.02121c-0.078125,0.401786 -0.301339,0.602679 -0.669643,0.602679c-0.513393,0 -0.770089,-0.385045 -0.770089,-1.15513v-1.45647h2.99665v-1.72433c0,-0.881697 -0.15067,-1.52902 -0.452009,-1.94196c-0.435268,-0.569196 -1.02679,-0.853794 -1.77455,-0.853794c-0.758928,0 -1.35603,0.284598 -1.79129,0.853794c-0.3125,0.412947 -0.46875,1.06027 -0.46875,1.94196v2.89621c0,0.881696 0.16183,1.52902 0.485491,1.94196c0.435268,0.569197 1.03795,0.853795 1.80804,0.853795c0.803571,0 1.40625,-0.295759 1.80804,-0.887277c0.200893,-0.301339 0.318081,-0.602679 0.351563,-0.904018c0.022321,-0.100446 0.033482,-0.424107 0.033482,-0.970982Zm-10.1786,-15.2846v-3.51562c0,-0.77009 -0.239955,-1.15513 -0.719866,-1.15513c-0.47991,0 -0.719866,0.385044 -0.719866,1.15513v3.51562c0,0.78125 0.239956,1.17188 0.719866,1.17188c0.479911,0 0.719866,-0.390625 0.719866,-1.17188Zm12.0368,12.5725c0,2.61161 -0.145089,4.56473 -0.435268,5.85938c-0.15625,0.658483 -0.479911,1.21094 -0.970982,1.65737c-0.491072,0.446429 -1.06027,0.703126 -1.70759,0.77009c-2.05357,0.234375 -5.15067,0.351562 -9.29129,0.351562c-4.14062,0 -7.23772,-0.117187 -9.2913,-0.351562c-0.647321,-0.066964 -1.21931,-0.323661 -1.71596,-0.77009c-0.496651,-0.446428 -0.817522,-0.998883 -0.962611,-1.65737c-0.290179,-1.25 -0.435268,-3.20312 -0.435268,-5.85938c0,-2.61161 0.145089,-4.56473 0.435268,-5.85938c0.15625,-0.658482 0.479911,-1.21094 0.970982,-1.65737c0.491071,-0.446428 1.06585,-0.708705 1.72433,-0.78683c2.04241,-0.223214 5.13393,-0.334821 9.27455,-0.334821c4.14062,0 7.23772,0.111607 9.29129,0.334821c0.647321,0.078125 1.21931,0.340402 1.71596,0.78683c0.496652,0.446429 0.817523,0.998884 0.962612,1.65737c0.290179,1.25 0.435268,3.20312 0.435268,5.85938Zm-16.7076,-21.3616h1.70759l-2.02567,6.67969v4.53683h-1.67411v-4.53683c-0.15625,-0.825893 -0.496652,-2.00893 -1.02121,-3.54911c-0.412947,-1.14955 -0.77567,-2.19308 -1.08817,-3.13058h1.77455l1.18862,4.4029Zm6.1942,5.57478v2.92969c0,0.904017 -0.15625,1.5625 -0.46875,1.97545c-0.424107,0.569196 -1.01562,0.853795 -1.77455,0.853795c-0.747768,0 -1.33371,-0.284599 -1.75781,-0.853795c-0.3125,-0.424107 -0.46875,-1.08259 -0.46875,-1.97545v-2.92969c0,-0.892857 0.15625,-1.54576 0.46875,-1.95871c0.424107,-0.569197 1.01004,-0.853795 1.75781,-0.853795c0.758929,0 1.35045,0.284598 1.77455,0.853795c0.3125,0.412946 0.46875,1.06585 0.46875,1.95871Zm5.60826,-2.71205v8.35379h-1.52344v-0.920759c-0.591517,0.691965 -1.16629,1.03795 -1.72433,1.03795c-0.513393,0 -0.842634,-0.206474 -0.987723,-0.61942c-0.089286,-0.267857 -0.133929,-0.686384 -0.133929,-1.25558v-6.59598h1.52344v6.14397c0,0.368303 0.00558,0.563616 0.016741,0.585937c0.033482,0.245536 0.150669,0.368304 0.351562,0.368304c0.30134,0 0.61942,-0.239956 0.954241,-0.719866v-6.37835Z" />
            </symbol>

            <symbol id="svg-linkedin" viewBox="0 -59.5 32 32">
              <path
                d="M5.84263,-39.827v16.5904h-5.52455v-16.5904Zm0.351562,-5.12277c0.011161,0.814732 -0.270647,1.49554 -0.845424,2.04241c-0.574776,0.546875 -1.33092,0.820312 -2.26842,0.820312h-0.033482c-0.915179,0 -1.65179,-0.273437 -2.20982,-0.820312c-0.558036,-0.546875 -0.837054,-1.22768 -0.837054,-2.04241c0,-0.825893 0.287388,-1.50949 0.862165,-2.05078c0.574777,-0.541295 1.32533,-0.811942 2.25167,-0.811942c0.92634,0 1.66853,0.270647 2.22656,0.811942c0.558036,0.541295 0.842634,1.22489 0.853794,2.05078Zm19.5201,12.2042v9.50893h-5.50781v-8.87277c0,-1.17188 -0.226004,-2.08984 -0.678013,-2.75391c-0.452009,-0.664063 -1.15792,-0.996094 -2.11775,-0.996094c-0.703125,0 -1.29185,0.192522 -1.76618,0.577567c-0.47433,0.385045 -0.828683,0.862165 -1.06306,1.43136c-0.122768,0.334821 -0.184152,0.78683 -0.184152,1.35603v9.25781h-5.50781c0.022321,-4.45312 0.033482,-8.06362 0.033482,-10.8315c0,-2.76786 -0.00558,-4.41964 -0.016741,-4.95536l-0.016741,-0.803571h5.50781v2.41071h-0.033482c0.223215,-0.357143 0.452009,-0.669643 0.686384,-0.9375c0.234375,-0.267857 0.549665,-0.558035 0.945871,-0.870535c0.396205,-0.3125 0.881696,-0.555246 1.45647,-0.728237c0.574777,-0.172991 1.21373,-0.259487 1.91685,-0.259487c1.90848,0 3.44308,0.633371 4.60379,1.90011c1.16071,1.26674 1.74107,3.12221 1.74107,5.56641Z"
                transform="scale(1.24444)"
              />
            </symbol>

            <symbol id="svg-instagram" viewBox="0 0 32 32">
              <g transform="scale(0.666667)">
                <path
                  d="M524,160c-6.51806,0 -7.33536,0.027628 -9.89522,0.144427c-2.55452,0.116512 -4.29917,0.52226 -5.82574,1.11559c-1.57821,0.613241 -2.91663,1.43388 -4.25096,2.76811c-1.33423,1.33433 -2.15487,2.67275 -2.76811,4.25096c-0.59333,1.52658 -0.999078,3.27122 -1.11559,5.82574c-0.116799,2.55985 -0.144427,3.37716 -0.144427,9.89522c0,6.51796 0.027628,7.33527 0.144427,9.89512c0.116512,2.55452 0.52226,4.29917 1.11559,5.82574c0.613241,1.57821 1.43388,2.91663 2.76811,4.25096c1.33433,1.33423 2.67275,2.15487 4.25096,2.76821c1.52658,0.593234 3.27122,0.998982 5.82574,1.11549c2.55985,0.116799 3.37716,0.144427 9.89522,0.144427c6.51796,0 7.33527,-0.027628 9.89512,-0.144427c2.55452,-0.116512 4.29917,-0.52226 5.82574,-1.11549c1.57821,-0.613337 2.91663,-1.43398 4.25096,-2.76821c1.33423,-1.33433 2.15487,-2.67275 2.76821,-4.25096c0.593234,-1.52658 0.998982,-3.27122 1.11549,-5.82574c0.116799,-2.55985 0.144427,-3.37716 0.144427,-9.89512c0,-6.51806 -0.027628,-7.33536 -0.144427,-9.89522c-0.116512,-2.55452 -0.52226,-4.29917 -1.11549,-5.82574c-0.613337,-1.57821 -1.43398,-2.91663 -2.76821,-4.25096c-1.33433,-1.33423 -2.67275,-2.15487 -4.25096,-2.76811c-1.52658,-0.59333 -3.27122,-0.999078 -5.82574,-1.11559c-2.55985,-0.116799 -3.37716,-0.144427 -9.89512,-0.144427Zm0,4.32432c6.40821,0 7.16731,0.024484 9.69801,0.139949c2.33998,0.1067 3.61076,0.49768 4.45645,0.826355c1.12026,0.435376 1.91975,0.955445 2.75954,1.79533c0.839884,0.839788 1.35995,1.63928 1.79533,2.75954c0.328675,0.845695 0.719655,2.11648 0.826355,4.45645c0.115465,2.5307 0.139949,3.2898 0.139949,9.69811c0,6.40821 -0.024484,7.16731 -0.139949,9.69801c-0.1067,2.33998 -0.49768,3.61076 -0.826355,4.45645c-0.435376,1.12026 -0.955445,1.91975 -1.79533,2.75954c-0.839788,0.839884 -1.63928,1.35995 -2.75954,1.79533c-0.845695,0.328675 -2.11648,0.719655 -4.45645,0.826355c-2.53032,0.115465 -3.28932,0.139949 -9.69801,0.139949c-6.40878,0 -7.16769,-0.024484 -9.69811,-0.139949c-2.33998,-0.1067 -3.61076,-0.49768 -4.45645,-0.826355c-1.12026,-0.435376 -1.91975,-0.955445 -2.75954,-1.79533c-0.839789,-0.839788 -1.35995,-1.63928 -1.79533,-2.75954c-0.328675,-0.845695 -0.719655,-2.11648 -0.826355,-4.45645c-0.115465,-2.5307 -0.139949,-3.2898 -0.139949,-9.69801c0,-6.40831 0.024484,-7.1674 0.139949,-9.69811c0.1067,-2.33998 0.49768,-3.61076 0.826355,-4.45645c0.435376,-1.12026 0.955445,-1.91975 1.79533,-2.75954c0.839788,-0.839884 1.63928,-1.35995 2.75954,-1.79533c0.845695,-0.328675 2.11648,-0.719655 4.45645,-0.826355c2.5307,-0.115465 3.2898,-0.139949 9.69811,-0.139949Zm0,7.35137c-6.80662,0 -12.3244,5.51774 -12.3244,12.3244c0,6.80653 5.51774,12.3243 12.3244,12.3243c6.80653,0 12.3243,-5.51774 12.3243,-12.3243c0,-6.80662 -5.51774,-12.3244 -12.3243,-12.3244Zm0,20.3243c-4.41835,0 -8.00005,-3.5817 -8.00005,-7.99995c0,-4.41835 3.5817,-8.00005 8.00005,-8.00005c4.41825,0 7.99995,3.5817 7.99995,8.00005c0,4.41825 -3.5817,7.99995 -7.99995,7.99995Zm15.6912,-20.8112c0,1.5906 -1.28945,2.87996 -2.88005,2.87996c-1.5905,0 -2.87996,-1.28936 -2.87996,-2.87996c0,-1.5906 1.28945,-2.88005 2.87996,-2.88005c1.5906,0 2.88005,1.28946 2.88005,2.88005Z"
                  transform="matrix(1,0,0,1,-500,-160)"
                />
              </g>
            </symbol>

            <symbol id="svg-navdown" viewBox="0 0 24 24">
              <path d="M5.8,9.7l6.2,6.3l6.2,-6.3c0.2,-0.2 0.3,-0.5 0.3,-0.7c0,-0.2 -0.1,-0.5 -0.3,-0.7c-0.2,-0.2 -0.4,-0.3 -0.7,-0.3h-11c-0.3,0 -0.5,0.1 -0.7,0.3c-0.2,0.2 -0.3,0.4 -0.3,0.7c0,0.3 0.1,0.5 0.3,0.7Z" />
            </symbol>

            <symbol id="svg-search" viewBox="0 0 57 57">
              <path
                d="M34.243,33.243c-3.515,3.515 -9.213,3.515 -12.728,0c-3.515,-3.515 -3.515,-9.213 0,-12.728c3.515,-3.515 9.213,-3.515 12.728,0c3.515,3.515 3.515,9.213 0,12.728Zm-1.414,-1.414c2.734,-2.734 2.734,-7.166 0,-9.899c-2.734,-2.734 -7.166,-2.734 -9.899,0c-2.734,2.734 -2.734,7.166 0,9.899c2.734,2.734 7.166,2.734 9.899,0Zm2.121,3.536l1.414,-1.414l2.115,2.115c0.394,0.394 0.4,1.028 0.007,1.421c-0.391,0.391 -1.021,0.394 -1.421,-0.007l-2.115,-2.115Z"
                fillRule="evenodd"
              />
            </symbol>
            <symbol id="svg-btn-arrow" viewBox="0 0 192 512">
              <path d="M0,384.662v-257.324c0,-17.818 21.543,-26.741 34.142,-14.142l128.662,128.662c7.81,7.81 7.81,20.474 0,28.284l-128.662,128.662c-12.599,12.6 -34.142,3.676 -34.142,-14.142Z" />
            </symbol>
          </svg>
        </body>
      </Html>
    );
  }
}

export default MyDocument;