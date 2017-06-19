

/**
 * Created by Brij on 2/25/2016.
 */
// Add / Update a key-value pair in the URL query parameters
export function addUpdateUrlParameter(uri:string, key:string, value:any) {
  // remove the hash part before operating on the uri
  var i = uri.indexOf('#');
  var hash = i === -1 ? '' : uri.substr(i);
  uri = i === -1 ? uri : uri.substr(0, i);

  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  var separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    uri = uri + separator + key + '=' + value;
  }
  return uri + hash;  // finally append the hash as well
}
export function calculateAvgUse(totalSession:number, totalDays:number):string {
  var rangeType:Array<any> = [];
  rangeType.push({type: 'day', days: 1});
  rangeType.push({type: 'week', days: 7});
  rangeType.push({type: 'fortnight', days: 15});
  rangeType.push({type: 'month', days: 30});
  rangeType.push({type: 'quarter', days: 90});
  rangeType.push({type: 'half-year', days: 180});
  rangeType.push({type: 'year', days: 365});

  var avgUse:string;
  var avgDays:number = 0;
  var i = 0;
  do {
    avgDays = Math.floor(totalSession / (totalDays / rangeType[i].days));
    i++;
  } while (avgDays < 1);

  avgUse = avgDays + (avgDays === 1 ? ' time per ' + rangeType[i - 1].type : ' times per ' +
    rangeType[i - 1].type);
  return avgUse;
}

export function addNoCacheParameter(endpoint:string) {
  return addUpdateUrlParameter(endpoint, 'nocache', new Date().getTime());
}
export function resizeImageUrl(imageUrl:string, width:number, height:number) {
  if (imageUrl.indexOf('images.arkera.co') !== -1) {
    var params:any = {
      'w': width,
      'h': height
    };

    var urlParams:string = '';
    Object.keys(params).forEach(function (item, index) {
      if (params[item] > 0) {
        urlParams += '&' + item + '=' + params[item];
      }
    });

    if (urlParams.length > 0) {
      imageUrl += '?' + urlParams.substring(1);
    }
  }
  return imageUrl;
}

export function logError(err:any) {
  if (err.status) {
    console.error('Server error: \n Status: ' + err.status + '\n Message: ' + err.statusText + '\n Url :' + err.url);
  } else {
    console.error('Error: \n' + err);
  }
}

export function milliSecondToTime(milliSecond: number) {
  var time: any;
  if (milliSecond > 0) {
    if (milliSecond >= 60000) {
      time = Math.floor(milliSecond / 60000);
      if (parseInt(time) > 0) {
        var suffix = 'MIN';
        if (parseInt(time) !== 1) {
          suffix = suffix + 'S';
        }
        time = ((time > 20) ? 20 : time) + ' ' + suffix;
      } else {
        time = null;
      }
    } else {
      time = Math.floor(milliSecond / 1000).toFixed(0);
      if (parseInt(time) > 0) {
        var suffix = 'SEC';
        if (parseInt(time) !== 1) {
          suffix = suffix + 'S';
        }
        time = time + ' ' + suffix;
      } else {
        time = null;
      }
    }
  } else {
    time = null;
  }
  return time;
}
