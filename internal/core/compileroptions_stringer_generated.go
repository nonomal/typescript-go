// Code generated by "stringer -type=ModuleKind,ScriptTarget -output=compileroptions_stringer_generated.go"; DO NOT EDIT.

package core

import "strconv"

func _() {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	var x [1]struct{}
	_ = x[ModuleKindNone-0]
	_ = x[ModuleKindCommonJS-1]
	_ = x[ModuleKindAMD-2]
	_ = x[ModuleKindUMD-3]
	_ = x[ModuleKindSystem-4]
	_ = x[ModuleKindES2015-5]
	_ = x[ModuleKindES2020-6]
	_ = x[ModuleKindES2022-7]
	_ = x[ModuleKindESNext-99]
	_ = x[ModuleKindNode16-100]
	_ = x[ModuleKindNodeNext-199]
	_ = x[ModuleKindPreserve-200]
}

const (
	_ModuleKind_name_0 = "ModuleKindNoneModuleKindCommonJSModuleKindAMDModuleKindUMDModuleKindSystemModuleKindES2015ModuleKindES2020ModuleKindES2022"
	_ModuleKind_name_1 = "ModuleKindESNextModuleKindNode16"
	_ModuleKind_name_2 = "ModuleKindNodeNextModuleKindPreserve"
)

var (
	_ModuleKind_index_0 = [...]uint8{0, 14, 32, 45, 58, 74, 90, 106, 122}
	_ModuleKind_index_1 = [...]uint8{0, 16, 32}
	_ModuleKind_index_2 = [...]uint8{0, 18, 36}
)

func (i ModuleKind) String() string {
	switch {
	case 0 <= i && i <= 7:
		return _ModuleKind_name_0[_ModuleKind_index_0[i]:_ModuleKind_index_0[i+1]]
	case 99 <= i && i <= 100:
		i -= 99
		return _ModuleKind_name_1[_ModuleKind_index_1[i]:_ModuleKind_index_1[i+1]]
	case 199 <= i && i <= 200:
		i -= 199
		return _ModuleKind_name_2[_ModuleKind_index_2[i]:_ModuleKind_index_2[i+1]]
	default:
		return "ModuleKind(" + strconv.FormatInt(int64(i), 10) + ")"
	}
}
func _() {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	var x [1]struct{}
	_ = x[ScriptTargetNone-0]
	_ = x[ScriptTargetES3-0]
	_ = x[ScriptTargetES5-1]
	_ = x[ScriptTargetES2015-2]
	_ = x[ScriptTargetES2016-3]
	_ = x[ScriptTargetES2017-4]
	_ = x[ScriptTargetES2018-5]
	_ = x[ScriptTargetES2019-6]
	_ = x[ScriptTargetES2020-7]
	_ = x[ScriptTargetES2021-8]
	_ = x[ScriptTargetES2022-9]
	_ = x[ScriptTargetES2023-10]
	_ = x[ScriptTargetES2024-11]
	_ = x[ScriptTargetESNext-99]
	_ = x[ScriptTargetJSON-100]
	_ = x[ScriptTargetLatest-99]
}

const (
	_ScriptTarget_name_0 = "ScriptTargetNoneScriptTargetES5ScriptTargetES2015ScriptTargetES2016ScriptTargetES2017ScriptTargetES2018ScriptTargetES2019ScriptTargetES2020ScriptTargetES2021ScriptTargetES2022ScriptTargetES2023ScriptTargetES2024"
	_ScriptTarget_name_1 = "ScriptTargetESNextScriptTargetJSON"
)

var (
	_ScriptTarget_index_0 = [...]uint8{0, 16, 31, 49, 67, 85, 103, 121, 139, 157, 175, 193, 211}
	_ScriptTarget_index_1 = [...]uint8{0, 18, 34}
)

func (i ScriptTarget) String() string {
	switch {
	case 0 <= i && i <= 11:
		return _ScriptTarget_name_0[_ScriptTarget_index_0[i]:_ScriptTarget_index_0[i+1]]
	case 99 <= i && i <= 100:
		i -= 99
		return _ScriptTarget_name_1[_ScriptTarget_index_1[i]:_ScriptTarget_index_1[i+1]]
	default:
		return "ScriptTarget(" + strconv.FormatInt(int64(i), 10) + ")"
	}
}
