function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import _asyncToGenerator from '@babel/runtime/helpers/esm/asyncToGenerator';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import React, { forwardRef, useRef, useEffect, useState, useMemo, useCallback, memo } from 'react';
import Cropper from 'react-easy-crop';
import LocaleReceiver from 'antd/es/locale-provider/LocaleReceiver';
import AntModal from 'antd/es/modal';
import AntSlider from 'antd/es/slider';

__$styleInject(".img-crop-modal .img-crop-container {\n  position: relative;\n  width: 100%;\n  height: 40vh;\n}\n.img-crop-modal .img-crop-control {\n  display: flex;\n  align-items: center;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.img-crop-modal .img-crop-control:first-of-type {\n  margin-top: 16px;\n}\n.img-crop-modal .img-crop-control:last-of-type {\n  margin-bottom: -8px;\n}\n.img-crop-modal .img-crop-control button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  font-style: normal;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n}\n.img-crop-modal .img-crop-control button[disabled] {\n  cursor: default;\n}\n.img-crop-modal .img-crop-control button + div:only-of-type {\n  flex: 1;\n  margin: 0 8px;\n}\n.img-crop-modal .img-crop-control-zoom button {\n  font-size: 18px;\n}\n.img-crop-modal .img-crop-control-rotate button {\n  font-size: 16px;\n}\n.img-crop-modal .img-crop-control-rotate button:first-of-type {\n  transform: rotate(-20deg);\n}\n.img-crop-modal .img-crop-control-rotate button:last-of-type {\n  transform: rotate(20deg);\n}\n");

var _excluded = ["beforeUpload", "accept"];
var cls = 'img-crop';
var INIT_ZOOM = 1;
var ZOOM_STEP = 0.0001;
var INIT_ROTATE = 0;
var ROTATE_STEP = 1;
var MIN_ROTATE = 0;
var MAX_ROTATE = 360;
var EasyCrop = /*#__PURE__*/forwardRef(function (props, ref) {
  var image = props.image,
      aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      zoom = props.zoom,
      rotate = props.rotate,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      rotateValRef = props.rotateValRef,
      setZoomValRef = props.setZoomValRef,
      setRotateValRef = props.setRotateValRef,
      cropPixelsRef = props.cropPixelsRef,
      cropperProps = props.cropperProps;

  var _useState = useState({
    x: 0,
    y: 0
  }),
      crop = _useState[0],
      onCropChange = _useState[1];

  var _useState2 = useState({
    width: 0,
    height: 0
  }),
      cropSize = _useState2[0],
      setCropSize = _useState2[1];

  var onCropComplete = useCallback(function (croppedArea, croppedAreaPixels) {
    cropPixelsRef.current = croppedAreaPixels;
  }, [cropPixelsRef]);
  var onMediaLoaded = useCallback(function (mediaSize) {
    var width = mediaSize.width,
        height = mediaSize.height;
    var ratioWidth = height * aspect;

    if (width > ratioWidth) {
      setCropSize({
        width: ratioWidth,
        height: height
      });
    } else {
      setCropSize({
        width: width,
        height: width / aspect
      });
    }
  }, [aspect]);

  var _useState3 = useState(INIT_ZOOM),
      zoomVal = _useState3[0],
      setZoomVal = _useState3[1];

  var _useState4 = useState(INIT_ROTATE),
      rotateVal = _useState4[0],
      setRotateVal = _useState4[1];

  rotateValRef.current = rotateVal;
  useEffect(function () {
    setZoomValRef.current = setZoomVal;
    setRotateValRef.current = setRotateVal;
  }, [setRotateValRef, setZoomValRef]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cropper, Object.assign({}, cropperProps, {
    ref: ref,
    image: image,
    crop: crop,
    cropSize: cropSize,
    onCropChange: onCropChange,
    aspect: aspect,
    cropShape: shape,
    showGrid: grid,
    zoomWithScroll: zoom,
    zoom: zoomVal,
    rotation: rotateVal,
    onZoomChange: setZoomVal,
    onRotationChange: setRotateVal,
    minZoom: minZoom,
    maxZoom: maxZoom,
    onCropComplete: onCropComplete,
    onMediaLoaded: onMediaLoaded,
    restrictPosition: false,
    classes: {
      containerClassName: cls + "-container",
      mediaClassName: cls + "-media"
    }
  })), zoom && /*#__PURE__*/React.createElement("section", {
    className: cls + "-control " + cls + "-control-zoom"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setZoomVal(zoomVal - 0.01);
    },
    disabled: zoomVal - 0.01 < minZoom
  }, "\uFF0D"), /*#__PURE__*/React.createElement(AntSlider, {
    min: minZoom,
    max: maxZoom,
    step: ZOOM_STEP,
    value: zoomVal,
    onChange: setZoomVal,
    tooltipVisible: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setZoomVal(zoomVal + 0.01);
    },
    disabled: zoomVal + 0.01 > maxZoom
  }, "\uFF0B")), rotate && /*#__PURE__*/React.createElement("section", {
    className: cls + "-control " + cls + "-control-rotate"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setRotateVal(rotateVal - ROTATE_STEP);
    },
    disabled: rotateVal === MIN_ROTATE
  }, "\u21BA"), /*#__PURE__*/React.createElement(AntSlider, {
    min: MIN_ROTATE,
    max: MAX_ROTATE,
    step: ROTATE_STEP,
    value: rotateVal,
    onChange: setRotateVal,
    tooltipVisible: false
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setRotateVal(rotateVal + ROTATE_STEP);
    },
    disabled: rotateVal === MAX_ROTATE
  }, "\u21BB")));
});
var EasyCropMemo = /*#__PURE__*/memo(EasyCrop);
var ImgCrop = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$aspect = props.aspect,
      aspect = _props$aspect === void 0 ? 1 : _props$aspect,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'rect' : _props$shape,
      _props$grid = props.grid,
      grid = _props$grid === void 0 ? false : _props$grid,
      _props$quality = props.quality,
      quality = _props$quality === void 0 ? 0.4 : _props$quality,
      _props$fillColor = props.fillColor,
      fillColor = _props$fillColor === void 0 ? 'white' : _props$fillColor,
      _props$zoom = props.zoom,
      zoom = _props$zoom === void 0 ? true : _props$zoom,
      _props$rotate = props.rotate,
      rotate = _props$rotate === void 0 ? false : _props$rotate,
      _props$minZoom = props.minZoom,
      minZoom = _props$minZoom === void 0 ? 1 : _props$minZoom,
      _props$maxZoom = props.maxZoom,
      maxZoom = _props$maxZoom === void 0 ? 3 : _props$maxZoom,
      modalTitle = props.modalTitle,
      modalWidth = props.modalWidth,
      modalOk = props.modalOk,
      modalCancel = props.modalCancel,
      onModalOk = props.onModalOk,
      onModalCancel = props.onModalCancel,
      beforeCrop = props.beforeCrop,
      onUploadFail = props.onUploadFail,
      cropperProps = props.cropperProps,
      children = props.children;
  var cb = useRef({});
  useEffect(function () {
    cb.current.onModalOk = onModalOk;
    cb.current.onModalCancel = onModalCancel;
    cb.current.beforeCrop = beforeCrop;
    cb.current.onUploadFail = onUploadFail;
  }, [beforeCrop, onModalCancel, onModalOk, onUploadFail]);
  /**
   * Upload
   */

  var _useState5 = useState(''),
      image = _useState5[0],
      setImage = _useState5[1];

  var fileRef = useRef();
  var resolveRef = useRef();
  var rejectRef = useRef();
  var beforeUploadRef = useRef();
  var uploadComponent = useMemo(function () {
    var upload = Array.isArray(children) ? children[0] : children;

    var _upload$props = upload.props,
        beforeUpload = _upload$props.beforeUpload,
        accept = _upload$props.accept,
        restUploadProps = _objectWithoutPropertiesLoose(_upload$props, _excluded);

    beforeUploadRef.current = beforeUpload;
    return _extends({}, upload, {
      props: _extends({}, restUploadProps, {
        accept: accept || 'image/*',
        beforeUpload: function beforeUpload(file, fileList) {
          return new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
              var reader;
              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = cb.current.beforeCrop;

                      if (!_context.t0) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 4;
                      return cb.current.beforeCrop(file, fileList);

                    case 4:
                      _context.t0 = !_context.sent;

                    case 5:
                      if (!_context.t0) {
                        _context.next = 8;
                        break;
                      }

                      reject();
                      return _context.abrupt("return");

                    case 8:
                      fileRef.current = file;

                      resolveRef.current = function (newFile) {
                        cb.current.onModalOk == null ? void 0 : cb.current.onModalOk(newFile);
                        resolve(newFile);
                      };

                      rejectRef.current = function (uploadErr) {
                        cb.current.onUploadFail == null ? void 0 : cb.current.onUploadFail(uploadErr);
                        reject(uploadErr);
                      };

                      reader = new FileReader();
                      reader.addEventListener('load', function () {
                        return setImage(reader.result);
                      });
                      reader.readAsDataURL(file);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      })
    });
  }, [children]);
  /**
   * Crop
   */

  var rotateValRef = useRef();
  var setZoomValRef = useRef();
  var setRotateValRef = useRef();
  var cropPixelsRef = useRef();
  /**
   * Modal
   */

  var modalProps = useMemo(function () {
    var obj = {
      width: modalWidth,
      okText: modalOk,
      cancelText: modalCancel
    };
    Object.keys(obj).forEach(function (key) {
      if (!obj[key]) delete obj[key];
    });
    return obj;
  }, [modalCancel, modalOk, modalWidth]);

  var onClose = function onClose() {
    setImage('');
    setZoomValRef.current(INIT_ZOOM);
    setRotateValRef.current(INIT_ROTATE);
  };

  var onCancel = useCallback(function () {
    cb.current.onModalCancel == null ? void 0 : cb.current.onModalCancel();
    onClose();
  }, []);
  var onOk = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    var rawImg, _cropPixelsRef$curren, cropWidth, cropHeight, cropX, cropY, canvas, ctx, rawWidth, rawHeight, boxSize, imgWidth, imgHeight, half, imgX, imgY, rotatedImg, _fileRef$current, type, name, uid, onBlob;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            onClose();
            rawImg = document.querySelector("." + cls + "-media");
            _cropPixelsRef$curren = cropPixelsRef.current, cropWidth = _cropPixelsRef$curren.width, cropHeight = _cropPixelsRef$curren.height, cropX = _cropPixelsRef$curren.x, cropY = _cropPixelsRef$curren.y;
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');

            if (rotate && rotateValRef.current !== INIT_ROTATE) {
              // make canvas to cover the rotated image
              rawWidth = rawImg.naturalWidth, rawHeight = rawImg.naturalHeight;
              boxSize = Math.sqrt(Math.pow(rawWidth, 2) + Math.pow(rawHeight, 2));
              imgWidth = rawWidth;
              imgHeight = rawHeight; // fit the long image

              /*
              if (boxSize > 4096) {
                const ratio = 4096 / boxSize;
                 boxSize = 4096;
                imgWidth = rawWidth * ratio;
                imgHeight = rawHeight * ratio;
                 cropWidth = cropWidth * ratio;
                cropHeight = cropHeight * ratio;
                cropX = cropX * ratio;
                cropY = cropY * ratio;
              }
              */

              canvas.width = boxSize;
              canvas.height = boxSize; // rotate image

              half = boxSize / 2;
              ctx.translate(half, half);
              ctx.rotate(Math.PI / 180 * rotateValRef.current);
              ctx.translate(-half, -half); // draw rotated image to canvas center

              ctx.fillStyle = fillColor;
              ctx.fillRect(0, 0, boxSize, boxSize);
              imgX = (boxSize - imgWidth) / 2;
              imgY = (boxSize - imgHeight) / 2;
              ctx.drawImage(rawImg, 0, 0, rawWidth, rawHeight, imgX, imgY, imgWidth, imgHeight);
              rotatedImg = ctx.getImageData(0, 0, boxSize, boxSize); // resize canvas to crop size

              canvas.width = cropWidth;
              canvas.height = cropHeight;
              ctx.fillStyle = fillColor;
              ctx.fillRect(0, 0, cropWidth, cropHeight);
              ctx.putImageData(rotatedImg, -(imgX + cropX), -(imgY + cropY));
            } else {
              canvas.width = cropWidth;
              canvas.height = cropHeight;
              ctx.fillStyle = fillColor;
              ctx.fillRect(0, 0, cropWidth, cropHeight);
              ctx.drawImage(rawImg, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
            } // get the new image


            _fileRef$current = fileRef.current, type = _fileRef$current.type, name = _fileRef$current.name, uid = _fileRef$current.uid;

            onBlob = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(blob) {
                var newFile, res, passedFile, _type;

                return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        newFile = new File([blob], name, {
                          type: type
                        });
                        newFile.uid = uid;

                        if (!(typeof beforeUploadRef.current !== 'function')) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return", resolveRef.current(newFile));

                      case 4:
                        res = beforeUploadRef.current(newFile, [newFile]);

                        if (!(typeof res !== 'boolean' && !res)) {
                          _context2.next = 8;
                          break;
                        }

                        console.error('beforeUpload must return a boolean or Promise');
                        return _context2.abrupt("return");

                      case 8:
                        if (!(res === true)) {
                          _context2.next = 10;
                          break;
                        }

                        return _context2.abrupt("return", resolveRef.current(newFile));

                      case 10:
                        if (!(res === false)) {
                          _context2.next = 12;
                          break;
                        }

                        return _context2.abrupt("return", rejectRef.current('not upload'));

                      case 12:
                        if (!(res && typeof res.then === 'function')) {
                          _context2.next = 25;
                          break;
                        }

                        _context2.prev = 13;
                        _context2.next = 16;
                        return res;

                      case 16:
                        passedFile = _context2.sent;
                        _type = Object.prototype.toString.call(passedFile);
                        if (_type === '[object File]' || _type === '[object Blob]') newFile = passedFile;
                        resolveRef.current(newFile);
                        _context2.next = 25;
                        break;

                      case 22:
                        _context2.prev = 22;
                        _context2.t0 = _context2["catch"](13);
                        rejectRef.current(_context2.t0);

                      case 25:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[13, 22]]);
              }));

              return function onBlob(_x3) {
                return _ref3.apply(this, arguments);
              };
            }();

            canvas.toBlob(onBlob, type, quality);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [fillColor, quality, rotate]);

  var getComponent = function getComponent(titleOfModal) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, uploadComponent, image && /*#__PURE__*/React.createElement(AntModal, Object.assign({
      visible: true,
      wrapClassName: cls + "-modal",
      title: titleOfModal,
      onOk: onOk,
      onCancel: onCancel,
      maskClosable: false,
      destroyOnClose: true,
      centered: true
    }, modalProps), /*#__PURE__*/React.createElement(EasyCropMemo, {
      ref: ref,
      image: image,
      aspect: aspect,
      shape: shape,
      grid: grid,
      zoom: zoom,
      rotate: rotate,
      rotateValRef: rotateValRef,
      setZoomValRef: setZoomValRef,
      setRotateValRef: setRotateValRef,
      minZoom: minZoom,
      maxZoom: maxZoom,
      cropPixelsRef: cropPixelsRef,
      cropperProps: cropperProps
    })));
  };

  if (modalTitle) return getComponent(modalTitle);
  return /*#__PURE__*/React.createElement(LocaleReceiver, null, function (locale, code) {
    return getComponent(code === 'zh-cn' ? '编辑图片' : 'Edit image');
  });
});

export { ImgCrop as default };
